class Extra < ApplicationRecord
	belongs_to :auto

	validates :kilometraje, presence: true, length: { minimum: 3, maximum: 10}
  	validates :bateria, presence: true, length: { minimum: 3, maximum: 10}
  	validates :num_tapetes, presence: true, length: { is: 1 }
  	# validates :tipo_tapete, presence: true, length: { minimum: 7, maximum: 25}
  	validates :gasolina_litros, presence: true, numericality: true
  	# validates :gasolina_medida, presence: true, numericality: true
  	validates :comentarios, presence: true, length: { minimum: 5, maximum: 60}
  	validates :descr_gral, presence: true, length: { minimum: 5, maximum: 60}

  	has_one_attached :firma
  	validates :firma, presence: true, blob: { content_type: :image }
  	validates :firma, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..5.megabytes }

    has_one_attached :danos_preexistentes
    validates :danos_preexistentes, presence: true, blob: { content_type: :image }
    validates :danos_preexistentes, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..5.megabytes}

end
