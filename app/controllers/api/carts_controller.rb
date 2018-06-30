class Api::CartsController < ApplicationController
  before_action :set_menu, only: [:create, :show, :update, :destroy]
  def index
    render json: Cart.all
  end

  def show
    render json: @cart
  end

  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart 
    else 
      render json: { errors: product.errors.full_message.join(', ') }, status: :unprocessable_entity 
    end
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render_error(@cart)
    end
end  
 
  def destroy
    @cart.destroy
  end

  private 

  def set_cart 
    @cart = Cart.find(params[:id])
  end 

  def cart_params
    params.require(:cart).permit(:tax, :subtotal, :total )
  end 
end


