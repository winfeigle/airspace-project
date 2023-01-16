class SpacesController < ApplicationController
    def index
        render json: Space.all
    end

    def show
        space = Space.find_by(id: params[:id])
        render json: space, status: :ok
    end

    def reviews
        reviews = Space.find_by(id: params[:id]).reviews
        render json: reviews, status: :ok
    end

    def create
        space = @current_user.spaces.create!(space_params)
        render json: space, status: :created
    end

    private

    def space_params
        params.permit(:name, :location, :price, :image_url, :description, :user_id, :rating)
    end
end
