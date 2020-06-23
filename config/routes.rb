Rails.application.routes.draw do
  get 'videos/index'
  get 'videos/show'
  get 'videos/create'
  get 'users/index'
  get 'users/show'
  get 'users/create'
  root 'pages#index'
  get '*path', to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
