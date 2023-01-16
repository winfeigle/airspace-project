class Review < ApplicationRecord
  validates :title, :comment, presence: true
  
  belongs_to :user
  belongs_to :space
end
