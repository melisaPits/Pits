class Api::V1::OperacioneController < ApplicationController
	before_action :validate_token_user
	before_action :set_token_siniestro

	#namespece :api do 
	#	namespece :V1 do
	#		scope :report_dano do
	#			resurces :opercione, only: [:create, :update, :index, :show]
	#		end
	#	end
	def create
		if @siniestro.report_dano.operacione.nil?
			operacione = @report_dano.build_operacione(operacione_params)
			if @operacione.save
				redirect_to edit_report_dano_path(@siniestro,@siniestro.report_dano,@siniestro.report_dano.operacione), notice: "Se ha registrado correctamente el reporte de daños"
				return 
			end
		end
	end

	def set_siniestro
		@siniestro = Siniestro.find(params[:siniestro])
		if @siniestro.nil?
			redirect_to siniestros_path, alert: "No existe el siniestro"
		end
	end

	def set_report_dano
		@report_dano = ReportDano.find(params[:id])
		if @report_dano.nil? && report_dano != @siniestro.report_dano
			redirect_to siniestro_path, alert: "No has registrado el reporte de daños"
		end
	end

end