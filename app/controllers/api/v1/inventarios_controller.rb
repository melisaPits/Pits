class Api::V1::InventariosController < ApplicationController
	before_action :set_errors
	before_action :validate_token_user
	before_action :set_token_siniestro
	before_action :set_inventarios

	def create
		 @siniestro.auto.inventario_auto.destroy_all
		 @inventarios.each do |i|
		 	unless @siniestro.auto.inventario_auto.create(inventario: i)
		 		@errors.push("No se ha registrado el inventario " + i.nombre)
		 	end
		 end
		 render :show
	end

	def set_inventarios
		@inventarios = Array.new()
		params[:inventarios].each do |i|
			inv = Inventario.find(i);
			if inv.nil?
				error!("Envia inventarios validos", :not_found)
			else
				@inventarios.push(inv);
			end
		end
	end
end