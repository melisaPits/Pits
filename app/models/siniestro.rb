class Siniestro < ApplicationRecord
	belongs_to :aseguradora
	belongs_to :cliente
	belongs_to :usuario
	has_one :auto
	has_one :report_dano
	after_save :update_noOrden

	validates :noSiniestro, presence: true, length: { minimum: 1, maximum: 20}
	validates :tipoEntrada, presence: true, numericality: {only_integer: true, greater_than: 0, less_than_or_equal_to: 4}
	# validates :status, presence: true
	validates :fechaEntrada, presence: true
	validates :fechaSalida, presence: true

	private
	def update_noOrden
		if self.noOrden.nil? || self.noOrden.blank?
			self.update_attribute(:noOrden, 'B' + self.id.to_s)
		end
	end
end