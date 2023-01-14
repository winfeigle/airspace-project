class SpacesController < ApplicationController
    def index
        render json: Space.all
    end
end
