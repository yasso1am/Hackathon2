class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.float :price
      t.string :category
      t.string :size
      t.integer :purchased
      t.integer :viewed
      t.text :instruction
      t.text :description
      t.string :name
      t.belongs_to :cart, foreign_key: true
      t.belongs_to :menu, foreign_key: true

      t.timestamps
    end
  end
end
