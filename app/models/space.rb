class Space < ApplicationRecord
  validates :name, presence: true
  validates :price, numericality: { greater_than: 0, message: "must be greater than 0"}

  validates :location, presence: true, format: { with: /(,\s\w{4})/, message: " – State can't be abbreviated"}
  belongs_to :user
end
