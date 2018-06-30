Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :carts
    resources :menus
    resources :foods
    resources :cart_foods, only: [:new, :create, :destroy]

    # puts 'api/cart_foods/:id', :to => 'cart_foods#new'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
