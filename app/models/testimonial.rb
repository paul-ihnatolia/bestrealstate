class Testimonial < ActiveRecord::Base
  belongs_to :realtor, :foreign_key => :realtor_id
  belongs_to :admin, :foreign_key => :admin_id
end
