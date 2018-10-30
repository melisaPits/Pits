class Api::V1::FotosController < ApplicationController
	before_action :set_errors
	before_action :validate_token_user
	before_action :set_token_siniestro

	def show
	end

	def create
		auto = @siniestro.auto
		@foto = auto.fotos_auto.where(tipo: params[:tipo]).take
		if @foto.nil?
			@foto = FotosAuto.new(fotos_params)
			@foto.auto = auto
			@foto.foto.attach(params[:foto])
			if @foto.save
				puts @foto.to_yaml
				render :show
			else
				error!("No se ha podido guardar la foto", :unauthorized)
				return
			end
		else
			error!("No se ha podido guardar la foto", :unauthorized)
			return
		end
	end

	def fotos_params
		params.permit(:tipo)
	end
end