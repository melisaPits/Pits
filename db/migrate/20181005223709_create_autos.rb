class CreateAutos < ActiveRecord::Migration[5.2]
  def change
    create_table :autos do |t|
      t.string :Vin
      t.string :Placas
      t.string :Marca
      t.string :Modelo
      t.string :Anio
      t.string :Color

      t.timestamps
    end
  end
end
