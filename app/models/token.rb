class Token < ApplicationRecord
	belongs_to :usuario
	before_create :generate_token

	private 
	def generate_token 
  		begin 
  			self.token = SecureRandom.hex(30)
  		end while Token.where(token: self.token).any?
	end
end
