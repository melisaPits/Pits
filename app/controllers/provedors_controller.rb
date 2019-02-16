class ProvedorsController < ApplicationController
  before_action :set_provedor, only: [:show, :edit, :update, :destroy]

  # GET /provedors
  # GET /provedors.json
  def index
    @provedors = Provedor.all
    @provedor = Provedor.new
  end

  # GET /provedors/1
  # GET /provedors/1.json
  def show
  end

  # GET /provedors/new
  def new
    
  end

  # GET /provedors/1/edit
  def edit
  end

  # POST /provedors
  # POST /provedors.json
  def create
    @provedor = Provedor.new(provedor_params)

    respond_to do |format|
      if @provedor.save
        format.html { redirect_to provedors_path, notice: 'Se ha registrado un nuevo proveedor' }
        format.json { render :show, status: :created, location: @provedor }
      else
        format.html { render :new }
        format.json { render json: @provedor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /provedors/1
  # PATCH/PUT /provedors/1.json
  def update
    respond_to do |format|
      if @provedor.update(provedor_params)
        format.html { redirect_to provedors_path, notice: 'El proveedor ha sido actualizado' }
        format.json { render :show, status: :ok, location: @provedor }
      else
        format.html { render :edit }
        format.json { render json: @provedor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /provedors/1
  # DELETE /provedors/1.json
  def destroy
    @provedor.destroy
    respond_to do |format|
      format.html { redirect_to provedors_url, notice: 'Se ha eliminado proveedor' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_provedor
      @provedor = Provedor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def provedor_params
      params.require(:provedor).permit(:provedor, :contacto, :telefono1, :telefono2, :correo)
    end
end
