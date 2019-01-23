######## TERMINAL RESPONSES #############

# print "How old are you? "
# age = gets.chomp.to_i
# print "How tall are you? "
# height = gets.chomp
# print "How much do you weigh? "
# weight = gets.chomp

# puts "So, you're #{age} old, #{height} tall and #{weight} heavy."

############# ARV #############
#(written when running ruby file on terminal)

# first, second, third = ARGV

# puts "Your first variable is: #{first}"
# puts "Your second variable is: #{second}"
# puts "Your third variable is: #{third}"

user_name = ARGV.first # gets the first argument
prompt = '> '

puts "Hi #{user_name}."
puts "I'd like to ask you a few questions."
puts "What's your favorite color #{user_name}? "
puts prompt
color = $stdin.gets.chomp

puts "What's your favorite food #{user_name}? "
puts prompt
food = $stdin.gets.chomp

# a comma for puts is like using it twice
puts "What are you watching on Netflix? ", prompt
netflix = $stdin.gets.chomp

puts """
Alright, #{color} is a pretty nice color!
Yummy!! #{food} sounds delicious!
Never heard of #{netflix}, but Rise of the Phoenix is a great show!
"""