Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :carts
    resources :menus
    resources :foods
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
