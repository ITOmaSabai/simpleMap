class AddColumnToMaps < ActiveRecord::Migration[7.1]
  def change
    add_column :maps, :lat, :float
    add_column :maps, :lng, :float
    add_column :maps, :text, :string
  end
end
