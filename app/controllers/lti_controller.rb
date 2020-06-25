class LtiController < ApplicationController
  def launch
    # Check if the key is present or not
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
    session[:oauth_consumer_key] = params.require :oauth_consumer_key
    session[:id] = @user.id
    
    redirect_to '/upload'
  end

  def get_session
    render json: {session: session.to_hash }, status:200
  end

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end