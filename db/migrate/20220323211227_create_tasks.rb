class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :start_time
      t.string :end_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
