puts "Seeding database..."

#  CREATE USERS
User.create(username: "Win", password: "password")
10.times do
    User.create(username: Faker::Name.first_name, password: "password")
end

# CREATE SPACES
office_spaces = [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2301&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1575886876783-ea3cbbc8204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
]

10.times do
    Space.create(
        name: Faker::App.name, 
        location: "#{Faker::Address.city}, #{Faker::Address.state}", 
        description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), 
        image_url: office_spaces.sample,
        price: rand(40..500), 
        rating: rand(3.2...5.0).round(2),
        user_id: User.all.sample.id
        )
end





puts "Done seeding ✅"