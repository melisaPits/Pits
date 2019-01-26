class ApplicationController < ActionController::Base
	before_action :login?

	def login?
    	if usuario_signed_in?
      		@c_user = current_usuario
      		if @c_user.token.nil?
      			@c_user.build_token.save
      		end
    	end
	end

	def authenticate_user
    	redirect_to(new_usuario_session_path, alert: "Tienes que iniciar sesión") unless usuario_signed_in?
	end

	def authenticate_super_admin!
		redirect_to root_path, alert: "No cuentas con los permisos necesarios para realizar esta operación" unless @c_user.admin?
	end 

	def authenticate_admin!
    	redirect_to root_path, alert: "No cuentas con los permisos necesarios para realizar esta operación" unless @c_user.admin? || @c_user.secretary?
  	end

	def authenticate_asesor!
		redirect_to root_path, alert: "No cuentas con los permisos necesarios para realizar esta operación" unless @c_user.asesor?
	end

	def error!(message,status)
	    @errors << message
	    response.status = status
	    render "api/v1/errors"
	end

	def errors!(status)
		response.status = status
		render "api/v1/errors"
	end

	def set_errors
		@errors = []
	end

	def validate_token_user
		if(params.has_key?(:usuario) && params.has_key?(:token))
			@c_user = Usuario.find(params[:usuario])
			if @c_user.nil? || @c_user.token.nil?
				error!("No se ha iniciado sesión", :unauthorized)
				return
			end
			unless @c_user.token.token == params[:token]
				error!("No se ha iniciado sesión", :unauthorized)
				return
			end
		else
			error!("No se ha iniciado sesión", :unauthorized)
			return
		end
	end

	def set_token_siniestro
		if(params.has_key?(:siniestro))
			@siniestro = Siniestro.find(params[:siniestro])
			if @siniestro.nil? || @siniestro.auto.nil?
				error!("Envia un siniestro valido", :not_found)
				return
			end
		else
			error!("Envia un siniestro valido", :not_found)
			return
		end
	end
end
