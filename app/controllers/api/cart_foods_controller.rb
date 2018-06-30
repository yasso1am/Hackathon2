class Api::CartFoodsController < ApplicationController

  def new
    foods = Food.all.map{ |i| name: i.name, i.id, i.price, i.category}
  end 

  def create
    cart_food = CartFood.new(cart_food_params)
    if cart_food.save 
      render json :cart_food 
    else 
      render_error(cart_food)
    end 
  end

  def destroy
    CartFood.find(params[:id]).destroy
  end

  private

    def cart_food_params
      params.require(:cart_food).permit(:cart_id, :food_id, )
    end 
end
