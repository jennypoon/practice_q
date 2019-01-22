var prompt = require('prompt-sync')()

randomNumber = Math.floor(Math.random() * 20);

var guess = prompt("Guess a number:");
let counter = 0

function(guess) {
  if (guess === 10) {
    console.log(`You got it! You took ${counter} attempts!`)
  }

  else if (guess > randomNumber) {
    counter++
    console.log("Too High!")
  }

  else if (guess < randomNumber) {
    counter++
    console.log("Too Low")
  }

  if (typeof guess != 'number') {
    counter++
    console.log("Not A Number")
  }
  else {
    console.log("Testing")
  }

}
// console.log("You answered: " + question);