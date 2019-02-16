class CreateProvedors < ActiveRecord::Migration[5.2]
  def change
    create_table :provedors do |t|
      t.string :provedor
      t.string :contacto
      t.string :telefono1
      t.string :telefono2
      t.string :correo

      t.timestamps
    end
  end
end
