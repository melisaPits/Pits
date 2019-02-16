class ClientesController < ApplicationController
  before_action :set_cliente, only: [:show, :edit, :update, :destroy]

  # GET /clientes
  # GET /clientes.json
  def index
    @cliente = Cliente.new
    @clientes = Cliente.all()
  end

  # GET /clientes/1/edit
  def edit
  end

  # PATCH/PUT /clientes/1
  # PATCH/PUT /clientes/1.json
  def update
    if @cliente.update(cliente_params)
      redirect_to clientes_path, notice: "Se ha actualizado el cliente correctamente "
      return 
    end
    render :index
  end

  def create
    @cliente = Cliente.new(cliente_params)
    if @cliente.save
          redirect_to clientes_path, notice: "Se ha registrado correctamente el cliente" 
          return
    end
    @clientes = Cliente.all()
    render :index
  end

  def destroy
    if @cliente.destroy
      redirect_to clientes_path, notice: "Se ha eliminado el cliente correctamente" 
        return
    end
     render index
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cliente
      @cliente = Cliente.find(params[:id])

    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cliente_params
      params.require(:cliente).permit(:Nombre, :Direccion, :Telefono, :Correo)
    end
end
