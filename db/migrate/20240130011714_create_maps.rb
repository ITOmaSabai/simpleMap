class CreateMaps < ActiveRecord::Migration[7.1]
  def change
    create_table :maps do |t|

      t.timestamps
    end
  end
end
