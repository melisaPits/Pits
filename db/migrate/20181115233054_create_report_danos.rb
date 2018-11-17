class CreateReportDanos < ActiveRecord::Migration[5.2]
  def change
    create_table :report_danos do |t|
      t.string :direccion
      t.string :transmision
      t.integer :noPuertas
      t.integer :noCilindro
      t.string :tipoAsientos
      t.string :tipoRin
      t.string :medidaLlanta
      t.string :eleCristal
      t.string :tipoEspejo
      t.string :tipoFaro
      t.string :farosNie
      t.integer :golpeMag
      t.text :comentario
      t.references :siniestro, foreign_key: true

      t.timestamps
    end
  end
end
