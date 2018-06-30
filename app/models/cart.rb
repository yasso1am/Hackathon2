class Cart < ApplicationRecord
  belongs_to :user
  has_many :foods, dependent: :destroy
  has_many :carts, through: :cart_foods
end
