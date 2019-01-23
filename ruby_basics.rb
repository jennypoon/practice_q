### 3 ways to print things:

print "1" #PRINT: to_s, No /n at the end
print 1

puts "1" #PUT: to_s, /n at the end
puts 1

p "1" #P: no to_s, calls inpsect (good for debugging)
p 1

### String Interpolation:
p "#{5.0 * 4} string Interpolation"

### Concatenation/addition if same type
a = "String 1"
b = "String 2"
c = 1
d = 3

puts "String + String - #{a + b}"
puts "Integer + Integer - #{c + d}"
puts "String x Integer - #{a * d}" #Multiple string by # = prints string # times


### Format String
#% vs #{}
first = 5
second = 6
third = 7
fourth = 8

formatters = "#{first} #{second} #{third} #{fourth}"

formatter = "%{first} %{second} %{third} %{fourth}"

puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
puts formatter % {first: "one", second: "two", third: "three", fourth: "four"}
puts formatters

x = "hi"
p %Q[#{x} Ram!] #= > "hi Ram!"
p %q[#{x} Ram!] #= > "\#{x} Ram!"
p %Q[th\e] #= > "th\e"
p %q[th\e] #= > "th\\e" # notice the \\ with %q[]
