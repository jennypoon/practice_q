//maximum number of consecutive 's in 's binary representation

function binary(n) {
  return Math.max(
    ...Number(n) //convert into number
    .toString(2) //representation in binary
    .split(/0+/) //remove zero to group ones
    .map(e => e.length) //array with length of one
    ) //returns highest number
}

console.log(binary(1230))

