class CreateRealtors < ActiveRecord::Migration
  def change
    create_table :realtors do |t|
      t.string :firstname
      t.string :lastname
      t.text   :description
      t.string :phone_number
      t.string :email
      t.string :adress
      t.string :video_url
      t.string :g_plus_profile
      t.string :facebook_profile
      t.string :twitter_profile
      t.string :listings_url
    end
  end
end
