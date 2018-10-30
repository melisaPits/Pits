class Auto < ApplicationRecord
	belongs_to :siniestro
	has_many :inventario_auto
  	has_many :inventario, through: :inventario_auto
  	has_many :fotos_auto
  	has_one :extra
end
