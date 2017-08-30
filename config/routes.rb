Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, {format: "json"} do
    namespace :v1 do
      resources :posts
    end
  end

  root to: "entries#index"
  get "*path", to: "entries#index"
end
