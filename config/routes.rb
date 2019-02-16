Rails.application.routes.draw do
  resources :provedors
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  # Devise routes for user management
  devise_for :usuarios, skip: :registrations, :controllers => { :sessions => "usuarios/sessions" }
  devise_scope :usuario do
	resource :registration,
	only: [:new, :create, :edit, :update],
    path: 'usuarios',
    path_names: { new: 'sign_up' },
    controller: 'usuarios/registrations',
    as: :usuario_registration do
      get :cancel
    end
  end
  # Clients routes for clients management
  resources :clientes, only: [:index, :edit, :update, :create, :destroy]
  # Aseguradoras routes for aseguradoras management
  resources :aseguradoras, except: [:destroy]
  # Siniestro routes for siniestro management
  resources :siniestros, except: [:destroy]
  # Report_danos routes for report_danos management
  scope ':siniestro' do
    resources :report_danos, only: [:index, :show, :edit, :update, :create]
  end 

  resources :operarios, only: [:index]

  namespace :api, defaults: { format: "json" } do
      namespace :v1 do
        resources :fotos_autos, controller: "fotos", only: [:create]
        post '/inventarios' => 'inventarios#create', only: [:create]
        resources :extras, controller: "extras", only: [:create]
        scope ':siniestro' do
          scope ':reporte_danos' do
            resources :operaciones, controller: "operacione", only: [:create, :update, :destroy]
          end
        end
      end
  end

  # get-post-delete-put-patch '/nueva_camisa_de_rallas' => 'camisa#new', as: 'new_camisa_rallas'
end

# siniestro/:id/reporte_danos