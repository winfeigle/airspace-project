class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :space_id
end
