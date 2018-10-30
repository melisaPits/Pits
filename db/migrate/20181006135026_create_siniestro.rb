class CreateSiniestro < ActiveRecord::Migration[5.2]
  def change
    create_table :siniestros do |t|
      t.string :noOrden
      t.string :noSiniestro
      t.integer :poliza
      t.integer :tipoEntrada
      t.integer :status
      t.date :fechaEntrada
      t.date :fechaSalida
      t.references :aseguradora, foreign_key: true
      t.references :cliente, foreign_key: true
      t.references :usuario, foreign_key: true

      t.timestamps
    end
    add_index :siniestros, :noOrden, unique: true
  end
end
