class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :file
      t.string :thumbnail
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
