class Auto < ApplicationRecord
	belongs_to :siniestro
	has_many :inventario_auto
  	has_many :inventario, through: :inventario_auto
  	has_many :fotos_auto
  	has_one :extra

  	validates :Vin, presence: true, length: { is: 17 }
  	validates :Placas, presence: true, length: { minimum: 3, maximum: 7 }
  	validates :Marca, presence: true, length: { minimum: 7, maximum: 25 }
  	validates :Modelo, presence: true, length: { minimum: 7, maximum: 25 }
  	validates :Anio, presence: true, numericality: true
  	validates :Color, presence: true, length: { minimum: 4, maximum: 10 }
end
