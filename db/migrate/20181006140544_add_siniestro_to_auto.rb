class AddSiniestroToAuto < ActiveRecord::Migration[5.2]
  def change
    add_reference :autos, :siniestro, foreign_key: true, unique:true
  end
end
