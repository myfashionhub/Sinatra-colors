class CreatePalettes < ActiveRecord::Migration
  def up
    create_table :palettes do |t|
      t.string :title
      t.string :colors
    end
  end

  def down
    drop_table :palettes
  end
end
