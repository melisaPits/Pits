class Aseguradora < ApplicationRecord
	has_many :siniestro

	validates :nombre, presence: true, length: { minimum: 7, maximum: 50}
end
