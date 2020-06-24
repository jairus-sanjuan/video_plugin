Rails.application.routes.draw do
  post '/launch', to: 'lti#launch'
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  root 'pages#index'
  get '*path', to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
