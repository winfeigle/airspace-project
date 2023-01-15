class RemovePriceFromSpaces < ActiveRecord::Migration[6.1]
  def change
    remove_column :spaces, :price, :string
  end
end
