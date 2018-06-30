class Food < ApplicationRecord
  # belongs_to :cart, optional: true
  belongs_to :menu, optional: true
  has_many :carts, through: :cart_foods 
end
