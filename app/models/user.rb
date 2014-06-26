class User < ActiveRecord::Base

  ROLES = %w(admin)

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
