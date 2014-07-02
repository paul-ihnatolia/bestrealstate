Rails.application.routes.draw do
  root :to => 'home#index'

  devise_for :users, only: :sessions

  namespace :admin do
    resources :realtors
  end

  post "/realtors/add_testimonial", to: 'admin/realtors#add_testimonial'
  post "/realtors/edit_testimonial", to: 'admin/realtors#edit_testimonial'
  post "/realtors/delete_testimonial", to: 'admin/realtors#delete_testimonial'
  post "/realtors/search_by_params", to: 'admin/realtors#search_by_params'
end