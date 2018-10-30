class Api::V1::ExtrasController < ApplicationController
	before_action :set_errors
	before_action :validate_token_user
	before_action :set_token_siniestro

	def create
		extra = @siniestro.auto.build_extra(extra_params)
		if extra.save
			render :show	
		else
			error!("Envia inventarios validos", :unprocessable_entity)
		end
	end

	private
	def extra_params
		params.permit(:kilometraje, :bateria, :num_tapetes, :gasolina_litros, :comentarios, :descr_gral)
	end

end