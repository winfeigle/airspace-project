class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price
  has_one :user
end
