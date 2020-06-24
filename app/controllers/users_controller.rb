class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  protect_from_forgery :except => [:create,:index]
  
  def index
    users = User.all
    render json: UserSerializer.new(users).serialized_json
  end

  def show
    render json: UserSerializer.new(@user).serialized_json
  end

  def create
    user = User.new(user_params)

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

    def user_params
      params.require(:user).permit(:key, :secret)
    end
end
