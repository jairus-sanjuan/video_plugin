module Api
  module V1
    class VideosController < ApplicationController
      before_action :set_user, only: [:show, :create, :all]
      protect_from_forgery :except => [:create,:index]

      def index
        videos = Video.all
        render json: serializer(videos)
      end

      def all
        videos = @user.videos
        puts '------- videos'
          puts videos.inspect
        puts '------- videos'
        render json: serializer(videos)
      end
    
      def show
         

        if @user.videos.exists?(params[:id])
          video = @user.videos.find(params[:id])
          render json: serializer(video)
        else
          render json: { error: "no videos found with id : #{params[:id]}" }, status: 404
        end

      end
    
      def create
        video = @user.videos.create(video_params)

        if video.save
          render json: serializer(video)
        else
          render json: { error: video.errors.messages }, status:422
        end
        
      end

      private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    def set_user
      @user = User.find_by(id: params[:user_id])

      if @user == nil
        return render json: {error: 'User not found.'}, status:404
      elsif @user.id != session[:id]
        return render json: {error: 'Unauthorized request.'}, status:401
      end
      
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.require(:video).permit(:title, :file, :thumbnail, :user_id)
    end

    def serializer(records, options = {})
      VideoSerializer
        .new(records, options)
        .serialized_json
    end

    end    
  end
end