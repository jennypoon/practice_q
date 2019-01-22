//USING ARRAY
function isUnique(string) {
  if (string.length > 26) {
    return false
  } else {

    let uniqueLetters = []
    let letters = string.split("")
    for (i = 0; i < letters.length; i++) {

      if (uniqueLetters.includes(letters[i])) {
        return console.log("FALSE")
      } else {
        uniqueLetters.push(letters[i])
      }
    }
    return console.log("TRUE")
  }
}


//Can't use forEach
  //   letters.forEach((letter) => {
  //     if (uniqueLetters.includes(letter)) {
  //       return console.log("FALSE")
  //     } else {
  //       uniqueLetters.push(letter)
  //     }
  //   })
  // } return console.log("TRUE");

//USING OBJECT
function is_Unique(string) {
  if (string.length > 26) {
    return console.log("false")
  } else {

    let uniqueLetters = {}

    for (let i = 0; i < string.length; i++) {
      let character = string[i]
      if (uniqueLetters[character]) {
        return console.log("False")
      } else {
        uniqueLetters[character] = true
      }
    }
  } return console.log("True")
}

is_Unique("testing")
is_Unique("abcd")
isUnique("race")
isUnique("abcd")