let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 88, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 36, name: 'Commander Jerjerrod' }
];

let idOnly = officers.map((person) => {
  // console.log("PERSON", person) //Each Object
  return person.id
})

// console.log("IDONLY", idOnly)

let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

let totalYears = pilots.reduce(function (x, pilot) {
  // console.log("ACCUMULATOR", x)
  // console.log("PILOT", pilot)
  return x + pilot.years;
}, 0);

console.log("TOTAL YEARS", totalYears)

let highestId = officers.reduce((highest, person) => {
  // console.log("highest", highest)
  // console.log("person", person)
  return (highest.id || 0) > person.id ? highest : person;
}, {})

console.log("HIGHEST", highestId)

// ------------------practice questions------------------------------//

let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Get the total score of force users only
let forceScore = personnel.filter((person) => person.isForceUser === true) //return an array of users who are force users
                          .map((i) => i.pilotingScore + i.shootingScore) // a new array of scores
                          .reduce((x, i) => x + i, 0) // sum of arrays
console.log("FORCE SCORE", forceScore)

//
function sayHello2(name) {
  var text = 'Hello ' + name; // Local variable
  var say = function() { console.log(text); }
  return say;
}
var say2 = sayHello2('Bob');
say2(); // logs "Hello Bob"