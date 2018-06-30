class Food < ApplicationRecord
  belongs_to :cart, optional: true
  belongs_to :menu, optional: true
end
