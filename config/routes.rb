Rails.application.routes.draw do
  
  get '/session', to: 'lti#get_session'

  namespace :api do
    namespace :v1 do
      
      get '/users', to: 'users#index'
      get '/users/:user_id', to: 'users#show'
      get '/users/:user_id/videos', to: 'videos#all'
      get '/users/:user_id/videos/:id', to: 'videos#show'
      post '/users', to: 'users#create'
      post 'users/:user_id/videos', to: 'videos#create'
    end
  end

  post '/launch', to: 'lti#launch'
  root 'pages#index'
  get '*path', to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
