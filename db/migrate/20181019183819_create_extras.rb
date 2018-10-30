class CreateExtras < ActiveRecord::Migration[5.2]
  def change
    create_table :extras do |t|
      t.references :auto, foreign_key: true
      t.integer :kilometraje
      t.string :bateria
      t.integer :num_tapetes
      t.string :tipo_tapete
      t.integer :gasolina_litros
      t.integer :gasolina_medida
      t.text :comentarios
      t.text :descr_gral
    end
  end
end
