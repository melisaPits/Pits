class CreateAseguradora < ActiveRecord::Migration[5.2]
  def change
    create_table :aseguradoras do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
