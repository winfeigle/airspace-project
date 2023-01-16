Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :create]
  resources :spaces, only: [:index, :show, :create]

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/spaces/:id/reviews', to: 'spaces#reviews'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
