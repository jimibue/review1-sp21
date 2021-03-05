Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  # goes to static_controller calls index method
  # when user goes to localhost:3000
  root 'static#index'
end
