class User < ActiveRecord::Base

  ROLES = %w(admin)

  has_many :testimonials, :foreign_key => :admin_id

  validates :role, presence: true, inclusion: ROLES

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
