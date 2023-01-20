class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8, message: 'must be longer than 8 characters' }

    validates :password, confirmation: true, unless: -> { password.blank?}

    has_secure_password

    has_many :spaces, dependent: :destroy
    has_many :reviews, dependent: :destroy
    # has_many :spaces, through: :reviews
end
