# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    email 'admin1@gmail.com'
    username 'admin1'
    password '123456789'
    password_confirmation '123456789'
    role 'admin'
  end
end
