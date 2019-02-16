class OperariosController < ApplicationController
	before_action :set_new_user

	def set_new_user
		@usuario = Usuario.new
	end

	def index
		@usuarios = Usuario.all()

	end

end
