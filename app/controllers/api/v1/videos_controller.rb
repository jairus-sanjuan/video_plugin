module Api
  module V1
    class VideosController < ApplicationController
      protect_from_forgery :except => [:create,:index]
      def index
      end
    
      def show
      end
    
      def create
      end
    end    
  end
end