class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8 }

    has_secure_password

    has_many :spaces
end
