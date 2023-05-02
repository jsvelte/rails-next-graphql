class User < ApplicationRecord
  acts_as_token_authenticatable
  has_secure_password
  has_many :posts

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
