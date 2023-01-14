puts "Seeding database..."

User.create(username: "Win", password: "password")

10.times do
    User.create(username: Faker::Name.first_name, password: "password")
end

10.times do
    Space.create(
        name: Faker::App.name, 
        location: Faker::Address.full_address, 
        description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), 
        price: rand(40..500), 
        user_id: User.all.sample.id 
        )
end





puts "Done seeding ✅"