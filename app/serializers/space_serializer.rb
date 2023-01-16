class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url, :rating, :user_id
  
  has_one :user
  # has_many :reviews
end
