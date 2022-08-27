# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

greetings = Greeting.create([
  { message: 'The most important thing is the thing most easily forgotten' },
  { message: 'Do not seek praise, seek criticism' },
  { message: 'Do not check work email on your days off' },
  { message: 'Make choices and dont look back' },
  { message: 'When in doubt, just take the next small step' },
  { message: 'Gratitude is said to be the secret to happiness' },
  { message: 'Try to do the things that you\'re incapable of' },
  { message: 'Measure twice, cut once' },
  { message: 'Age is of no importance, unless you are a cheese' },
  { message: 'You\'re not as fat as you think you are' },
  { message: 'The best way to predict the future is to create it' },
  { message: 'It\'s wrong to be right' },
  { message: 'Happiness is a journey, not a destination' }
])
