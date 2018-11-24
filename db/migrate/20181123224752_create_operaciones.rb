class CreateOperaciones < ActiveRecord::Migration[5.2]
  def change
    create_table :operaciones do |t|
      t.boolean :trabExterno
      t.integer :costoTot
      t.integer :tipo
      t.string :manoObra
      t.string :refaccion
      t.integer :costoHojalateria
      t.integer :costoPintura
      t.integer :costoMecanica
      t.integer :status
      t.references :report_dano, foreign_key: true

      t.timestamps
    end
  end
end
