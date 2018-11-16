class SiniestrosController < ApplicationController
	before_action :authenticate_user
	before_action :authenticate_asesor!
	before_action :set_siniestro, only: [:show, :edit, :update]
	before_action :set_cliente, only: [:create]
	before_action :set_siniestro_auto, only: [:new]
	before_action :set_aseguradoras, only: [:new, :edit]
	before_action :set_asesores, only: [:new, :edit]
	before_action :set_aseguradora, only: [:create, :update]
	before_action :set_asesor, only: [:create, :update]
	before_action :set_inventario, only: [:show]
	before_action :set_imagenes, only: [:show]

	def index
		@siniestros = Siniestro.all()

	end

	def show
		respond_to do |format|
			format.html
			format.pdf {
				render pdf: 'reporteSiniestro', 
				type: 'application/pdf',
				template: 'siniestros/reporteSiniestro',
				layout: 'pdf.html',
				disposition: 'attachment'
			}
		end
	end

	def new

	end

	def create
		# raise params.to_yaml
		@siniestro = Siniestro.new(siniestro_params)
		@siniestro.aseguradora = @aseguradora
		@siniestro.usuario = @asesor
		@siniestro.build_auto(auto_params)
		@siniestro.cliente = @cliente
		if @siniestro.auto.valid?
			if @cliente.valid?
				if @siniestro.save
					redirect_to @siniestro, notice: "Se ha registrado correctamente el siniestro" 
					return
				end
			end
		end
		set_aseguradoras
		set_asesores
		render :new
	end

	def edit
	end

	def update
	end

	private 
	def cliente_params
		params.permit(:Nombre, :Direccion, :Telefono, :Correo)
	end

	def siniestro_params
		params.require(:siniestro).permit(:noSiniestro, :poliza, :tipoEntrada, :fechaEntrada, :fechaSalida)
	end

	def set_aseguradora
		@aseguradora = Aseguradora.find(params[:siniestro][:aseguradora_id])
	end

	def set_asesor
		@asesor = Usuario.find(params[:siniestro][:usuario_id])
	end

	def auto_params
		params[:siniestro].require(:auto).permit(:Vin, :Placas, :Marca, :Modelo, :Anio, :Color)
	end

	def set_siniestro
		@siniestro = Siniestro.find(params[:id])
		if @siniestro.nil?
			redirect_to :index, alert: "No existe el siniestro"
		end
	end

	def set_cliente
		if Cliente.exists?(params[:cliente_id])
			@cliente = Cliente.find(params[:cliente_id])
			@cliente.update(cliente_params)
		else
			@cliente = Cliente.new(cliente_params)
		end
	end

	def set_siniestro_auto
		@siniestro = Siniestro.new()
		@siniestro.build_auto
	end

	def set_aseguradoras
		@aseguradoras = Aseguradora.all()
	end

	def set_asesores
		@asesores = Usuario.all.where("tipo = 3")
	end

	def set_inventario
		@inventarioExteriores = Inventario.where(activo: true, categoria: 1).order(:id)
		@inventarioInteriores = Inventario.where(activo: true, categoria: 2).order(:id)
		@inventarioMecanica = Inventario.where(activo: true, categoria: 3).order(:id)
		@inventarios = @siniestro.auto.inventario_auto
		@extra = @siniestro.auto.extra
	end

	def set_imagenes
		puts 1
		unless @siniestro.nil?
			puts 2
			auto = @siniestro.auto
			unless auto.nil?
				puts 3
				@fotos = auto.fotos_auto
			end
		end
	end

end
