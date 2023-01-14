class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url
  has_one :user
end
