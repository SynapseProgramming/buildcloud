Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'sensors/create'
      get 'sensors/read'
      get 'sensors/update'
      delete 'sensors/delete'
    end
  end
  get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
