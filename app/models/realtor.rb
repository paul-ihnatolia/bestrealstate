class Realtor < ActiveRecord::Base
  has_many :testimonials, :foreign_key => :realtor_id
  has_attached_file :avatar, :styles => { :thumb => "64x64" }, :default_url => "/assets/avatar.png"
  validates_attachment :avatar, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }
end
