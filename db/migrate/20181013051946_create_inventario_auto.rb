class CreateInventarioAuto < ActiveRecord::Migration[5.2]
  def change
    create_table :inventario_autos do |t|
      t.references :auto, foreign_key: true
      t.references :inventario, foreign_key: true
    end
  end
end
