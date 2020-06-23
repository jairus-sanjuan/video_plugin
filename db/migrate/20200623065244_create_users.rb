class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :key
      t.string :secret

      t.timestamps
    end
  end
end
