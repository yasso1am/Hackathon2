class Api::FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]

  def index
    render json: Food.all
  end

  def show
    render json: @food
  end

  def create
    food = Food.new(food_params)
    if food.save
      render json: food
    else
      render json: { errors: food.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      json: { errors: @food.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @food.destroy
  end

  private
    def set_food
      @food = Food.find(params[:id])
    end

    def food_params
      params.require(:food).permit(:size, :price, :name, :category, :viewed, :clicked, :instruction, :description, :quantity, :cart_id, :menu_id)
    end
end
