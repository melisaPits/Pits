class Api::V1::OperacioneController < ApplicationController
	before_action :set_errors
	before_action :validate_token_user
	before_action :set_token_siniestro
	before_action :set_siniestro
	before_action :set_report_dano

	def create
		@operacione = Operacione.new(operacion_params)
		@operacione.report_dano = @report_dano
		unless @operacione.save
			@errors << @operacione.errors.full_messages
			@errors.push("reporte_dano" + @report_dano.to_s)
			errors!(:unprocesable_entity)	
			return
		end
		@operacione.fotos.attach(params[:fotos])
		render :show
	end

	def set_siniestro
		@siniestro = Siniestro.find(params[:siniestro])
		if @siniestro.nil?
			error!("El siniestro no existe", :unprocesable_entity)
			return
		end
	end

	def set_report_dano
		@report_dano = ReportDano.find(params[:reporte_danos])
		if @report_dano.nil? || @report_dano != @siniestro.report_dano
			error!("El reporte de daños no existe", :unprocesable_entity)
			return
		end
	end

	private
	def operacion_params
		params.require(:operacione).permit(:trabExterno, :costoTot, :tipo, :manoObra, :refaccion, :costoHojalateria, 
			:costoPintura, :costoMecanica, :status)

	end

end