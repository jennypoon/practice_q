puts "Enter text here:"
input = gets.chomp
frequencies = Hash.new(0)

words = input.split(" ")

words.each { |word|
  frequencies[word] += 1
}
puts frequencies