class AddPriceToSpaces < ActiveRecord::Migration[6.1]
  def change
    add_column :spaces, :price, :integer
  end
end
