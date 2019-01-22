function squareCode(input) {
  if (input.length > 81 ) {
    return "input too long. Max 81 characters"
  } else {
    let arr = []
    let columnLength = Math.ceil(Math.sqrt(input.length))
    let rowLength = Math.floor(Math.sqrt(input.length))
    let encodedMsg = []


    while (input.length) {
      arr.push(input.substr(0, columnLength))
      //redefine input
      input = input.substr(columnLength)
    }
    console.log("ARR", arr)
    for (let i = 0; i <= rowLength; i++) {
      encodedMsg.push(arr.reduce((accumulator, word) => accumulator + word[i], ""))
    }
    console.log("ENCODED MSG", encodedMsg)
    return encodedMsg.join(" ")

// animals.reduce((accumulator, animal) => accumulator + animal[0], '')
  }
}
console.log(squareCode("haveaniceday")) //hae and via ecy
console.log(squareCode("feedthedog"))
console.log(squareCode("chillout"))
// have
// anic
// eday