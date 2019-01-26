class AddFielToOperaciones < ActiveRecord::Migration[5.2]
  def change
    add_column :operaciones, :costoC, :integer
    add_column :operaciones, :precioV, :integer
  end
end
