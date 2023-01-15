class ChangeDescriptionInSpaces < ActiveRecord::Migration[6.1]
  def change
    change_column :spaces, :description, :text
  end
end
