class FotosAuto < ApplicationRecord
  belongs_to :auto
  has_one_attached :foto
  validates :foto, presence: true, blob: { content_type: :image }
  validates :foto, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..5.megabytes }


  	def classname
		"FotosAuto"
	end
end
