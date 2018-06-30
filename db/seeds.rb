
@category = ["noondles", "Mom's Specials", "Asian Delight", "Soup", "Desserts", "Beverages"]
@menu = ["Lunch Menu", "Dinner Menu"]
@image = [
  "https://s3-media2.fl.yelpcdn.com/bphoto/zGa6D0a5GPpKkhrcvByUXQ/348s.jpg",
  "https://s3-media3.fl.yelpcdn.com/bphoto/Alc-Z9d-dZRcQL5Ao8KZVg/348s.jpg",
  "https://media2.fdncms.com/saltlake/imager/u/original/3006332/dine_feature1-1-8a6752069a3364d3.jpg",
  "https://archive.sltrib.com/images/2014/0807/dining_moms_080614~10.jpg",
  "https://s3-media3.fl.yelpcdn.com/bphoto/GwD2DA46DEVfzvp-6Msvlg/348s.jpg",
  "http://utahstories.com/wp-content/uploads/2018/04/pot-sticker-moms-kitchen-1.jpg",
  "https://s3-media4.fl.yelpcdn.com/bphoto/5rr1WVdqHvfa9PuaQbo9_w/348s.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/7/18575897/4b21f46604f921c9b3ce98a15c0aa244.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  "http://entertainment.sltrib.com/img/uploads/articles/article58242788_796449.jpg",
  ]

3.times do 
  @new_menu = Menu.create(
    name: @menu.sample
    )
    20.times do 
      @new_menu.foods.create(
        price: Faker::Number.decimal(2),
        category: @category.sample,
        description: Faker::Food.description,
        name: Faker::Food.dish,
        image: @image.sample, 
      )
    end
  end

  puts "Mom's Kitchen has been seeded"
