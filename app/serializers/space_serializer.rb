class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url, :rating, :reviews
  
  has_one :user
  has_many :reviews
end
