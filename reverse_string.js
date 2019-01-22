

// function reverseString(string) {
//   return string.split("").reverse().join("")
// }

function reverse_string(array) {
  let reversedWord = ""
  array.forEach((string) => {
    let characters = string.split("")

    for (i = characters.length; i >= 0 ; i--) {
      reversedWord += characters[i]
    }
    return console.log(reversedWord)
  })
}

let userInput = process.argv.slice(2)

reverse_string(userInput)


console.log(process.argv.slice(2))

