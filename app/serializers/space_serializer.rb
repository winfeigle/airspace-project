class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url, :rating
  
  # has_many :users
  has_many :reviews
end
