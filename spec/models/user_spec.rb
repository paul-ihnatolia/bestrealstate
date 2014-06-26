require 'rails_helper'

RSpec.describe User, :type => :model do
  describe 'validations' do
    it 'is valid user' do
      expect(FactoryGirl.build(:user)).to be_valid
    end

    it 'is invalid without role' do
      user = FactoryGirl.build(:user, role: nil)
      expect(user).not_to be_valid
      expect(user.errors[:role]).to include("can't be blank")
    end

    it 'is invalid with wrong role' do
      user = FactoryGirl.build(:user, role: 'moderator')
      expect(user).not_to be_valid
      expect(user.errors[:role]).to include("is not included in the list")
    end

    it 'is valid without email' do
      expect(FactoryGirl.build(:user, email: "")).to be_valid
    end
  end
end
