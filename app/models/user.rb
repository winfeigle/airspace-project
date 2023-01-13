class User < ApplicationRecord
    validates :username, presence: true
    validates :password, length: { minimum: 8 }
    
    has_secure_password
end
