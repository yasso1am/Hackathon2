class Food < ApplicationRecord
  belongs_to :cart
  belongs_to :menu
end
