require 'rails_helper'

RSpec.describe User, :type => :model do
  before(:each) do
    @user = FactoryGirl.build(:user)
  end

  it "is valid user" do
    @user.should be_valid
  end
end
