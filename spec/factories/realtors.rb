
FactoryGirl.define do
  factory :realtor do
    firstname          'Ihor'
    lastname           'Breza'
    description        'Ihor Breza is probably one of the best realtors ever. He\
                        gained a lot of expirience during his work in Goog;e Inc. He has\
                        a lot of recommendations from most popular managers all over the world.'
    phone_number       '+380508337005'
    email              'seniorigor@gmail.com'
    adress             'Dobroljubova Street, Uzhgood'
    video_url          'https://youtube.com'
    g_plus_profile     'https://g+.com'
    facebook_profile   'https://facebook.com'
    twitter_profile    'https://twitter.com'
    listings_url       'http://someshit.com'
  end
end
