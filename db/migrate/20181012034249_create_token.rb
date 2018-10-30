class CreateToken < ActiveRecord::Migration[5.2]
  def change
    create_table :tokens do |t|
      t.string :token
      t.references :usuario, index: {:unique=>true}, foreign_key: true
    end
  end
end
