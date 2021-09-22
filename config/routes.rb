Rails.application.routes.draw do
  root "episodes#index"
  resources :episodes do
    resources :tags, only: [:index, :show, :update, :create]
  end
  resources :tags do
    resources :episodes, only: [:index, :show, :update, :create]
  end
  get '/privacy_policy', to: 'episodes#privacy_policy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
