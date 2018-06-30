class AddQuantityToFoods < ActiveRecord::Migration[5.1]
  def change
    add_column :foods, :quantity, :integer
  end
end
