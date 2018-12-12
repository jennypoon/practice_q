var camelCase = function(input) {
  let camelCase = "";
  let words = input.split(" ")
  camelCase += words[0]

  input.split(" ").slice(1).forEach((word) => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    camelCase += capitalizedWord
  })

return camelCase

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));