class AddAttributesToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_column :usuarios, :nombreUsuario, :string
    add_index :usuarios, :nombreUsuario, unique: true
    add_column :usuarios, :nombre, :string
    add_column :usuarios, :celular, :string
    add_column :usuarios, :tipo, :integer
  end
end
