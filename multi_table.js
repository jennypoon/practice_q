function borderConstruction(maxValue) {
  let border = "+";

  if (maxValue < 9) {
    for (let i = 1; i <= maxValue; i++) {
      border += "----+";
    }

  } else {
    for (let i = 1; i <= maxValue; i++) {
      border += "-----+";
    }
  }
  return border;
}


var multiplicationTable = function(maxValue) {
  let row = ""

  console.log(borderConstruction(maxValue))


  if (maxValue < 9) {
    for (let i = 1; i <= (maxValue); i++) {
      for (let j = 1; j <= (maxValue); j++ )
        if ( i * j > 9 ) {
          row += `| ${i * j} `
        } else {
          row += `| ${i * j}  `

        }
      if (row.length = maxValue) {
        row += `|\n${borderConstruction(maxValue)} \n`
      }
    }

   //For MaxValue > 9
  } else {
      for (let i = 1; i <= (maxValue); i++) {
        for (let j = 1; j <= (maxValue); j++ )
          if ( i * j > 99 ) {
           row += `| ${i * j} `
          } else if (i * j > 9) {
            row += `| ${i * j}  `
          } else {
            row += `| ${i * j}   `
        }
      if (row.length = maxValue) {
        row += `|\n${borderConstruction(maxValue)} \n`
      }
    }
  }
return row
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(4));
