class Operacione < ApplicationRecord
	belongs_to :report_dano
	has_many_attached :fotos

  	scope :with_eager_loaded_fotos, -> { eager_load(fotos_attachments: :blob) }
end
