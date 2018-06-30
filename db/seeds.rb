
@category = ["noondles", "Mom's Specials", "Asian Delight", "Soup", "Desserts", "Beverages"]
@menu = ["Lunch Menu", "Dinner Menu"]

3.times do 
  @new_menu = Menu.create(
    name: @menu.sample
    )
    20.times do 
      @new_menu.foods.create(
        price: Faker::Number.decimal(2),
        category: @category.sample,
        description: Faker::Food.description,
        name: Faker::Food.dish
      )
    end
  end

  puts "Mom's Kitchen has been seeded"
