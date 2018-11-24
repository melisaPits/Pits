class ReportDano < ApplicationRecord
  belongs_to :siniestro
  has_one :operacione
end
