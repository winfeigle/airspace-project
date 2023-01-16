class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment

  has_one :user, serializer: ReviewUserSerializer
  has_one :space, serializer: ReviewSpaceSerializer
end
