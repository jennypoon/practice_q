puts "Enter text here:"
input = gets.chomp
frequencies = Hash.new(0)

words = input.split(" ")

words.each { |word|
  frequencies[word] += 1
}

frequencies = frequencies.sort_by do |word, count|
  count
end

frequencies.reverse!

frequencies.each { |word, count|
  puts "#{word} #{count_to.s}"
}