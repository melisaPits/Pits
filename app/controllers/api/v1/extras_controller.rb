class Api::V1::ExtrasController < ApplicationController
	before_action :set_errors
	before_action :validate_token_user
	before_action :set_token_siniestro

	def create
		if @siniestro.auto.extra.nil?
			extra = @siniestro.auto.build_extra(extra_params)
			if extra.save
				render :show	
			else
				puts extra.errors.messages
				error!("Envia datos validos", :unprocessable_entity)
			end
		else
			error!("Ya se han registrado los datos extra", :unprocessable_entity)
		end
	end

	private
	def extra_params
		params.permit(:kilometraje, :bateria, :num_tapetes, :gasolina_litros, :comentarios, :descr_gral, :firma, :danos_preexistentes)
	end

end