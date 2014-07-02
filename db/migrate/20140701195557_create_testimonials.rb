class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.text :text
      t.string :name
      t.integer :admin_id
      t.integer :realtor_id

      t.timestamps
    end
  end
end
