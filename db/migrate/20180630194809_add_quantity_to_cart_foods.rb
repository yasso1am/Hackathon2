class AddQuantityToCartFoods < ActiveRecord::Migration[5.1]
  def change
    add_column :cart_foods, :quantity, :integer
  end
end
