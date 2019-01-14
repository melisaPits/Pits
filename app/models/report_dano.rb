class ReportDano < ApplicationRecord
  belongs_to :siniestro
  has_many :operacione
end
