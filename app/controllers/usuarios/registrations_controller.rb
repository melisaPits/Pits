# frozen_string_literal: true

class Usuarios::RegistrationsController < Devise::RegistrationsController
  
  skip_before_action :require_no_authentication
  before_action :authenticate_user
  before_action :authenticate_admin!, only: [:new, :create]

  # GET /resource/sign_up
  def new
    #raise params.to_yaml
    @usuario = Usuario.new
  end

  # POST /resource
  def create
    # raise params.to_yaml
    @contraseña_correo = params[:usuario][:password]
    @usuario = Usuario.new(create_usuario_params)
    if @usuario.save
      # ActionGMailMailer.bienvenido_email(@user,@contraseña_correo).deliver
      redirect_to root_path, notice: "Se ha creado el usuario"
    else
      render :new
    end
  end

  # GET /resource/edit
   def edit
    super
   end

  # PUT /resource
  def update
    super
  end

  # GET /resource/cancel
  def cancel
    super
  end

  protected

  def update_resource(resource, parameters)
    if params[:usuario][:password].blank? && params[:usuario][:password_confirmation].blank?
      resource.update_without_password(update_usuario_params)
    else
      resource.update_with_password(update_usuario_params)
    end
  end

  

  private

  def create_usuario_params
    params.require(:usuario).permit(:email, :password, :password_confirmation, :tipo, :nombreUsuario, :nombre, :celular)
  end

  def update_usuario_params
    params.require(:usuario).permit(:nombre, :celular, :password, :password_confirmation, :current_password)
  end
end
