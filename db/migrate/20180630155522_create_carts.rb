class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.float :total
      t.float :subtotal
      t.float :tax
      t.boolean :delivery
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
