//LIST OUT ALL PLAYERS
function uniquePlayers(input) {
  let result = []
  input.forEach((i) => {
    if (!result.includes(i.winner)) {
      result.push(i.winner)
    }

    if (!result.includes(i.loser)) {
      result.push(i.loser)
    }
  })
  return result
}

//LIST OUT PLAYERS THEY BEAT
function beatenOpp(input){
  let obj = {};
  let players = uniquePlayers(input)
  players.forEach((i) => {
    let arr = []
    input.forEach((j) => {
      if (j.winner === i ) {
        if (!arr.includes(j.loser)) {
          arr.push(j.loser)
        }
      }
    })
    return obj[i] = arr;
  })
  return obj
}

//LIST OUT PLAYERS THEY LOST TO
function beatenBy(input) {
  let obj = {};
  for (player in input) {
  }
}

//=========================================//
var data =
[
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]


//TESTING
// console.log(uniquePlayers(data)) //Result: ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
// console.log(beatenOpp(data))
console.log(beatenBy(beatenOpp(data)))
    // Results: {
      // 'Alice': ['Bob', 'Carol'],
      // 'Bob':   [],
      // 'Carol': ['Dean'],
      // 'Dean':  ['Elise'],
      // 'Elise': ['Bob', 'Carol'],
    // }
