class AddRatingToSpaces < ActiveRecord::Migration[6.1]
  def change
    add_column :spaces, :rating, :float
  end
end
