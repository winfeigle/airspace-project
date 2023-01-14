class AddImageToSpaces < ActiveRecord::Migration[6.1]
  def change
    add_column :spaces, :image_url, :string
  end
end
