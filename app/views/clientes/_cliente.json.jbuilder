json.extract! cliente, :id, :Nombre, :Direccion, :Telefono, :Correo, :created_at, :updated_at
json.url cliente_url(cliente, format: :json)
