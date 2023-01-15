class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8, message: 'must be longer than 8 characters' }

    has_secure_password

    has_many :spaces, dependent: :destroy
end
