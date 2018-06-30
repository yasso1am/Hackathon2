class CreateCartFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_foods do |t|
      t.belongs_to :cart, foreign_key: true
      t.belongs_to :food, foreign_key: true

      t.timestamps
    end
  end
end
