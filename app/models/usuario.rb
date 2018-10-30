class Usuario < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :lockable, :trackable

  has_many :siniestro
  has_one :token

  validates :email, email: true, uniqueness: true, length: { maximum: 50}
  validates :nombreUsuario, presence: true, uniqueness: true, length: { minimum: 3, maximum: 30} 
  validates :nombre, presence: true, length: { minimum: 7, maximum: 50}
  validates_plausible_phone :celular, presence: true
  before_validation :set_phone
  validates :tipo, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 3}

  def admin?
  	self.tipo == 1
  end

  def secretary?
  	self.tipo == 2
  end

  def asesor?
  	self.tipo == 3
  end 

  def email=(address)
    if new_record?
      write_attribute(:email, address)
    end
  end

  def nombreUsuario=(name)
    if new_record?
      write_attribute(:nombreUsuario, name)
    end
  end

  private 
  def set_phone
    self.celular = PhonyRails.normalize_number(self.celular, country_code: 'MX')
  end
  
end
