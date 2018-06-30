class AddImageToFoods < ActiveRecord::Migration[5.1]
  def change
    add_column :foods, :image, :string
  end
end
