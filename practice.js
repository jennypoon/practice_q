let uniqueMorseRepresentations = function(words) {
  let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let resultcode = []

  words.forEach((word) => {
    let charArray = word.split('');
    let morseWord = [];

    for (let i = 0; i < charArray.length; i++) {
      if (alphabet.includes(charArray[i])) {
        let index = alphabet.indexOf(charArray[i])
        morseWord.push(morseCode[index])
      }
    }
    let result = morseWord.join("")

    if (!resultcode.includes(result)) {
      resultcode.push(result)
    }
    console.log(resultcode)
  });
    return resultcode.length
    // let uniq = [ ...new Set(resultcode) ]
    // console.log(uniq)
    // return uniq
}

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])