puts "Input a sentence"
input = gets.chomp

puts "Word to redact"
redact = gets.chomp

words = input.split(" ") #ARRAY

words.each do |word|
  if word != redact
    print word + " "
  else
    puts "REDACTED"
  end

end
