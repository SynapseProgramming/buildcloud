class CreateAcceles < ActiveRecord::Migration[7.0]
  def change
    create_table :acceles do |t|
      t.integer :Nodeid, null: false
      t.integer :Battery, null: false
      t.integer :X, null: false
      t.integer :Y, null: false
      t.integer :Z, null: false
      t.decimal :Time, null: false
      t.boolean :Sent, null: false

      t.timestamps
    end
  end
end
