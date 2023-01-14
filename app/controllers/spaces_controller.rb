class SpacesController < ApplicationController
    def index
        render json: Space.all
    end

    def show
        space = Space.find_by(id: params[:id])
        render json: space, status: :ok
    end
end
