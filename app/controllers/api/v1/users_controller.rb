module Api
  module V1
    class UsersController < ApplicationController
      before_action :set_user, only: [:show]
      protect_from_forgery :except => [:create,:index]
    
      def index
        users = User.all
        render json: serializer(users)
      end
    
      def show
        render json: serializer(@user)
      end
    
      def create
        user = User.new({"key" => Digest::SHA256.hexdigest(SecureRandom.uuid).slice(0,15), "secret" => Digest::SHA256.hexdigest(SecureRandom.uuid).slice(0,15)})
        
        # user = User.new(user_params)

        if user.save
          render json: UserSerializer.new(user).serialized_json
        else
          render json: { error: user.errors.messages}, status:422
        end
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_user
          params[:user_id]? @user = User.find(params[:user_id]) : @user = User.find(params[:id])
        end
    
        def serializer(records, options = {})
          UserSerializer
            .new(records, options)
            .serialized_json
        end
    
        def user_params
          params.require(:user).permit(:key, :secret)
        end
    end    
  end
end