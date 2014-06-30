class FixAddressForRealtors < ActiveRecord::Migration
  def change
    rename_column :realtors, :adress, :address
  end
end
