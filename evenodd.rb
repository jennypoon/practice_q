def evenOdd(input)
  words = input.split(" ")
  words.each do |word|
    i = word.length
    while i < word.length
    puts word[i]
  end
end

evenOdd("string paper")
