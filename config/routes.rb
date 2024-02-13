Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :maps
      resources :videos
    end
  end

  # すべてのパスを'home#index'にルーティングする
  # React側でルーティングを管理するため
  get '*path', to: 'home#index'
  root to: 'home#index'

end
