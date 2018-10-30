class CreateCreateFotosAutos < ActiveRecord::Migration[5.2]
  def change
    create_table :fotos_autos do |t|
      t.references :auto, foreign_key: true
      t.integer :tipo

      t.timestamps
    end
  end
end
