class ReportDanosController < ApplicationController
	before_action :authenticate_user
	before_action :authenticate_asesor!
	before_action :set_siniestro, only: [:index, :edit, :create, :update]
	before_action :set_report_dano, only: [:edit, :update]
	before_action :set_imagenes, only: [:index, :edit]
	before_action :setReport, only: [:index]
	before_action :buildReport, only: [:create]

	def index
		@report_dano
	end

	def show
	end


	def edit
		unless @report_dano.operacione.nil?
			@reparacion = @report_dano.operacione.reparacion
			@sustitucion = @report_dano.operacione.sustitucion
		end
	end

	def update
		if @report_dano.update(report_params)
			redirect_to siniestros_path, notice: "Se ha registrado correctamente el reporte de daños"
			return 
		end
		set_imagenes
		render :edit
	end


	def create
		if @report_dano.id.nil?
			if @report_dano.save
				redirect_to edit_report_dano_path(@siniestro,@siniestro.report_dano), notice: "Se ha registrado correctamente el reporte de daños"
				return 
			end
		end
		set_imagenes
		render :index
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

	def set_imagenes
		unless @siniestro.nil?
			auto = @siniestro.auto
			unless auto.nil?
				@fotos = auto.fotos_auto
			else
				redirect_to siniestro_path(@siniestro), alert: "Asegurate de registrar un auto"
			end
		else 
			redirect_to siniestro_path(@siniestro), alert: "Asegurate de registrar un auto"
		end
	end

	def setReport
		@report_dano = ReportDano.new(siniestro: @siniestro)
	end

	def buildReport
		@report_dano = @siniestro.build_report_dano(report_params)
	end


	private 
	def report_params
		params.require(:report_dano).permit(:direccion, :noCilindro, :medidaLlanta, :tipoFaro, 
			:transmision, :tipoAsientos, :eleCristal, :farosNie, :noPuertas, :tipoRin, :tipoEspejo, :golpeMag)
	end

	private
	def operacion_params
		params[:report_dano].require(:operacione).permit(:trabExterno, :costoTot, :tipo, :manoObra, :refaccion, :costoHojalateria, 
			:costoPintura, :costoMecanica, :status)

	end

end
