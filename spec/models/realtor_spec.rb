require 'rails_helper'

RSpec.describe Realtor, type: :model do
  describe 'validations' do
    it 'is valid user' do
      expect(FactoryGirl.build(:realtor)).to be_valid
    end
  end
end
