# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :testimonial, :class => 'Testimonials' do
    text "MyText"
    admin_id 1
    realtor_id 1
  end
end
