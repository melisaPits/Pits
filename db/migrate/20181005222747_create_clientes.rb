class CreateClientes < ActiveRecord::Migration[5.2]
  def change
    create_table :clientes do |t|
      t.string :Nombre
      t.text :Direccion
      t.string :Telefono
      t.string :Correo

      t.timestamps
    end
  end
end
