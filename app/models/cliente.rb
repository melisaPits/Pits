class Cliente < ApplicationRecord
	has_many :siniestro

	validates :Nombre, presence: true, length: { minimum: 7, maximum: 50}
	validates :Direccion, presence: true, length: { minimum: 5, maximum: 50}
	validates :Correo, presence: true, email: true
	validates_plausible_phone :Telefono, presence: true
	before_validation :set_phone

	private 
  def set_phone
    self.Telefono = PhonyRails.normalize_number(self.Telefono, country_code: 'MX')
  end
end
