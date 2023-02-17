class Review < ApplicationRecord
  validates :title, :comment, presence: true
  validates :comment, length: { minimum: 10 }
  
  belongs_to :user
  belongs_to :space
end
