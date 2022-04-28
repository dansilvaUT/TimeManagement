Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static#index"
  
  namespace :api do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :tasks
    #Auth
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
    #Tasks
    post :create_task , to: "tasks#create_task"
    delete :destroy, to: "tasks#destroy"
    put :update, to: "tasks#edit"
    get :get_user_tasks, to: "tasks#get_user_tasks"
    # get '*path', to: 'static#index', via: :all
  end
end
