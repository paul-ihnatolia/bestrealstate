Rails.application.routes.draw do
  devise_for :users, only: :sessions

  namespace :admin do
    resources :realtors
  end
end