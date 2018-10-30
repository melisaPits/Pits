class CreateInventarios < ActiveRecord::Migration[5.2]
  def change
    create_table :inventarios do |t|
      t.string :nombre
      t.integer :categoria
      t.boolean :activo

      t.timestamps
    end
  end
end
