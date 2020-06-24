class LtiController < ApplicationController
  def launch
    # Check if the key is present or not
    puts '-----------------------------------------'
      puts request.request_parameters.inspect
    puts '-----------------------------------------'

    require 'oauth/request_proxy/action_controller_request'

    authenticator = IMS::LTI::Services::MessageAuthenticator.new(request.url, request.request_parameters, "f4aa9c9aec6a7fc01cbafb791699410a")

    puts '-----------------------------------------'
      puts authenticator.valid_signature?
    puts '-----------------------------------------'

    #Check if the signature is valid
    return false unless authenticator.valid_signature?

    # check if `params['oauth_nonce']` has already been used

    #check if the message is too old
    return false if DateTime.strptime(params['oauth_timestamp'],'%s') < 5.minutes.ago

    if not authenticator.valid_signature?
      # the request wasn't validated
      puts 'invalid signature'
      return
    end

    #Request was valid, create a session for a user
    session[:user_id] = params.require :user_id
    
    redirect_to '/upload'
  end

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end