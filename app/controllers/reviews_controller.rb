class ReviewsController < ApplicationController
    def index
        render json: Review.all, status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:title, :comment, :user_id, :space_id)
    end

   
end
