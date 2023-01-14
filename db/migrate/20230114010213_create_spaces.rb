class CreateSpaces < ActiveRecord::Migration[6.1]
  def change
    create_table :spaces do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :price
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
