'use strict';

let repeatNumbers = function(data) {
  let string = "";

  for (let i = 0; i < data.length; i++) {
    let number = data[i][0]
    let repeatNum = data[i][1]

    for (let j = 0; j < repeatNum; j++) {
      string += number;
    }

    if (i < data.length - 1 ) {
        string += ", ";
    }
  }
  return string

};

console.log(repeatNumbers([[1, 10]])); //1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));//10101010, 343434343434, 9292


