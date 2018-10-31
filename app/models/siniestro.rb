class Siniestro < ApplicationRecord
	belongs_to :aseguradora
	belongs_to :cliente
	belongs_to :usuario
	has_one :auto
	after_save :update_noOrden

	validates :noSiniestro, presence: true, length: { minimum: 1, maximum: 20}
	validates :poliza, presence: true, length: { minimum: 3, maximum: 10}
	validates :tipoEntrada, presence: true, length: { minimum: 4, maximum: 10}
	validates :status, presence: true, numericality: true
	validates :fechaEntrada, presence: true
	validates :fechaSalida, presence: true

	private
	def update_noOrden
		if self.noOrden.nil? || self.noOrden.blank?
			self.update_attribute(:noOrden, 'B' + self.id.to_s)
		end
	end
end