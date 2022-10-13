Rails.application.routes.draw do
  namespace :api do
    
    resources :runs, only: [:index, :show, :create, :update, :destroy]

    resources :users

    get '/fastest-mile', to: 'runs#fastest_mile'

    get '/longest-run', to: 'runs#longest_run'

    get '/find-heartrate', to: 'runs#find_heartrate'

    get '/me', to: 'users#show'

    post '/signup', to: 'users#create'

    post '/login', to: 'sessions#create'

    delete '/logout', to: 'sessions#destroy'

  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
