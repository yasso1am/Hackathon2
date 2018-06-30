class AddColumnsToCart < ActiveRecord::Migration[5.1]
  def change
    add_column :carts, :city, :string
    add_column :carts, :street_address, :string
    add_column :carts, :zip, :string
    add_column :carts, :state, :string
    add_column :carts, :telephone, :string
  end
end
