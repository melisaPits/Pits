class Siniestro < ApplicationRecord
	belongs_to :aseguradora
	belongs_to :cliente
	belongs_to :usuario
	has_one :auto
	after_save :update_noOrden


	private
	def update_noOrden
		if self.noOrden.nil? || self.noOrden.blank?
			self.update_attribute(:noOrden, 'B' + self.id.to_s)
		end
	end
end