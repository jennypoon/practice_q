
function fizzBuzz () {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

function duplicate(arr) {
  let result = arr.concat(arr)
  return console.log(result)
}

fizzBuzz()

duplicate([1, 2, 3, 4, 5]) //[1,2,3,4,5,1,2,3,4,5]
duplicate([2, 3, 5, 6, 7])
