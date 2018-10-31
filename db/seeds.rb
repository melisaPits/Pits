# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Carga de usuarios
Usuario.create(email: "abc@gmail.com", password: "12345678", password_confirmation: "12345678", nombreUsuario: "prueba", celular: "7772507482", tipo: 1)

# Carga de aseguradoras
aseguradoras_list = [
	"QUALITAS",
	"AXXA",
	"GNP"
]

aseguradoras_list.each do |name|
  Aseguradora.create( nombre: name )
end


# Carga de inventarios
inventario_list = [
	["Faros", 1],
	["Cristales", 1],
	["Calaveras", 1],
	["Espejos", 1],
	["Limpiadores", 1],
	["Antena Radio", 1],
	["Moldura", 1],
	["Emblemas", 1],
	["Tapón gasolina", 1],
	["Placas", 1],
	["Tapónes de centro del rin", 1],
	["Llantas", 1],
	["Carroceria", 1],
	["Vestiduras", 2],
	["Extintor", 2],
	["Radio", 2],
	["Llantas de refaccion", 2],
	["Herramientas", 2],
	["Testigos", 2],
	["A/A", 2],
	["Encendedor", 2],
	["Triangulos", 2],
	["Gato", 2],
	["Cables pasa corriente", 2],
	["Tapón radiador", 3],
	["Tapón frenos", 3],
	["Tapón de aceite de dirección", 3],
	["Tapón aceite", 3],
	["Bayoneta", 3]
]

inventario_list.each do |name, type|
	Inventario.create(nombre: name, categoria: type, activo: true)
end

