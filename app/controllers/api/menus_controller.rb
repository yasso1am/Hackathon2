class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :create, :destroy, :update]
  
  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    user = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render error: { errors: user.errors }, status: 422
    end
  end

  def update
    @menu = menu
    if Menu.update(menu_params)
      render json: @menu
    else
      render errors: {errors: menu.errors} status: 422
  end

  def destroy
    @menu.destroy
    render json: {message: 'Menu item has been deleted.'}
  end

  private

    def set_menu
      @menu = Menu.find(params[:id])
    end

    def menu_params
      params.require(:menu).permit(:name)
    end
end
