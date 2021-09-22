Rails.application.routes.draw do
  root "episodes#index"
  resources :episodes do
    resources :tags, only: [:index, :show, :update, :create]
  end
  get '/privacy_policy', to: 'episodes#privacy_policy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/add_tag', to: 'episodes#add_tag'
end
