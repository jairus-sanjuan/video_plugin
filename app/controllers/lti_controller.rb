class LtiController < ApplicationController
  def launch
    # Check if the key is present or not
    puts '-----------------------------------------'
      
      puts request.request_parameters.inspect

    puts '-----------------------------------------'

    require 'oauth/request_proxy/action_controller_request'
    
    @user = User.find_by key: params[:oauth_consumer_key]

    if @user == nil
     return render json: { error: "User not found." }, status:404
    end

    authenticator = IMS::LTI::Services::MessageAuthenticator.new(request.url, request.request_parameters, @user.secret)

    #Check if the signature is valid
    unless authenticator.valid_signature?
      return render json: { error: "Invalid Signature" }, status:400
    end

    # check if `params['oauth_nonce']` has already been used

    #check if the message is too old
    if DateTime.strptime(params['oauth_timestamp'],'%s') < 5.minutes.ago
      return render json: { error: "Launch request expired." }, status:408
    end

    #Request was valid, create a session for a user
    session[:user_id] = params.require :user_id
    
    redirect_to '/upload'
  end

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end