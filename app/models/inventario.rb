class Inventario < ApplicationRecord

	validates :nombre, presence: true, length: { minimum: 3, maximum: 30}
	validates :activo, presence: true
	validates :categoria, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 3}

  def exterior?
  	self.categoria == 1
  end

  def interior?
  	self.categoria == 2
  end

  def mecanica?
  	self.categoria == 3
  end 
	
end
