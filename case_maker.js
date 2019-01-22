function makeCase(sentence, style) {

  switch (style) {
    case "camel":
      let camelCase = "";
      let words = sentence.split(" ");
      camelCase += words[0];

      sentence.split(" ").slice(1).forEach((word) => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        camelCase += capitalizedWord;
      });
      return camelCase;
    break;

    case "pascal":
      let pascal = "";
      sentence.split(" ").forEach((word) => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        pascal += capitalizedWord;
      });
      return pascal;
    break;

    case "snake":
      let snake = sentence.split(" ").join("_")
      return snake
    break;

    case "kebab":
      let kebab = sentence.split(" ").join("-")
      return kebab
    break;

    case "title":
      let title = [];
      sentence.split(" ").forEach((word) => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        title.push(capitalizedWord)
        });
      return title.join(" ");
    break;

    case "vowel":
      const vowels = ["a", "e", "i", "o", "u"];
      let results = []

      sentence.split(" ").forEach((word) => {

        let revisedWord = ""
        word.split("").forEach((letter) => {

          if (vowels.includes(letter)) {
            let capitalizedLetter = letter.toUpperCase()
            revisedWord += capitalizedLetter
          } else {
            revisedWord += letter;
          }
        })
        results.push(revisedWord)
      })
      return results.join(" ")
    break;

    case "consonant":
      const nonConsonant = ["a", "e", "i", "o", "u"];
      let newString = []

      sentence.split(" ").forEach((word) => {

        let revisedWord = ""
        word.split("").forEach((letter) => {

          if (!nonConsonant.includes(letter)) {
            let capitalizedLetter = letter.toUpperCase()
            revisedWord += capitalizedLetter
          } else {
            revisedWord += letter;
          }
        })
        newString.push(revisedWord)
      })
      return newString.join(" ")
    break;

    case "upper":
      return sentence.toUpperCase()
    break;

    case "lower":
      return sentence.toLowerCase()
    break;


  }



}



console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", "upper") === "THIS IS A STRING");
console.log(makeCase("this is A string", "lower") === "this is a string");
// console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");