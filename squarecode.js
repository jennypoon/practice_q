function squareCode(input) {
  if (input.length > 81 ) {
    return "input too long. Max 81 characters";

  } else {

    let arr = []
    let columnLength = Math.ceil(Math.sqrt(input.length))
    let rowLength = Math.floor(Math.sqrt(input.length))
    let encodedMsg = []

    //BREAK WORD UP INTO
    while (input.length) {
      arr.push(input.substr(0, columnLength))
      //redefine input
      input = input.substr(columnLength)
    }

    console.log("ARR", arr)

    for (let i = 0; i <= rowLength ; i++) {
      encodedMsg.push(arr.reduce((accumulator, word) => accumulator + word[i], ""))
    }

    let squareCode = encodedMsg.join(" ")
    return squareCode.split(new RegExp('undefined', 'i')).join('');

    // return encodedMsg.join(" ").replace(New ReqExp"undefined", "")

  }
}
console.log(squareCode("haveaniceday")) //hae and via ecy
console.log(squareCode("feedthedog"))
console.log(squareCode("chillout"))
