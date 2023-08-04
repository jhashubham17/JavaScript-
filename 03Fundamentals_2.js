//  introduction to array

const friends1 = `Michael`;
const Friends2 = `Steven`;
const Friends3 = `Peter`;

// ARRAY
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = [1980, 1990, 2000, 2010, 2020];
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

//  length of array
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Replace array
friends[2] = `ShuBhAm`;
console.log(friends);

//  we can not replace whole array

const firstName = `jonas`;
const jonas = [firstName, `Smith`, 2023 - 2005, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years1 = [1980, 1990, 2000, 2010, 2020];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[2]);

console.log(years.length);
console.log(age1, age2, age3);

const age = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
];

console.log(age);

// Basic Array Operation Methods

// push ~ Add element

const teams = [`ViRat`, `RoHit`, `Gill`, `RisHab`];
const newTeams = teams.push(`SKY`);
console.log(teams);
console.log(teams.length);

// pop ~ Remove  last element

teams.pop(); // last
const testTeam = teams.pop();
console.log(teams);

// shift ~ remove first element

teams.shift();
console.log(teams);

// index ~ position of array

// in array
console.log(teams.indexOf(`Gill`));
// not a array
console.log(teams.indexOf(`DhaWan`));
friends.push(`SiRaj`);
console.log(teams.indexOf(`SiRaj`));

if (teams.includes(`Gill`)) {
  console.log(`In a Playing11 `);
} else {
  console.log(`Not in a Playing 11`);
}

//  Objects

/* const cirTeams = {
  caption: `ViRat`,
  voiCap: `RoHit`,
  playing: 19 - 8,
  batsMan: [`Gill`, `KLRaHul`, `DhaWan`, `pant`],
  bolLer: [`SiRaj`, `BhuMRaha`, `ChaHal`, `AshWin`],
};
console.log(cirTeams.caption);
console.log(cirTeams.batsMan);

const interestedIn = prompt(`What do you to know about Indian Cricket team?`);

if (cirTeams[interestedIn]) {
  console.log(cirTeams[interestedIn]);
} else {
  console.log(`NO Data Found`);
}
cirTeams.coach = `raVi`;
cirTeams[`twitter`] = `@indianCircKet`;
console.log(cirTeams);*/

//  Object Methods

const jonas1 = {
  firstName: `jonas`,
  lastName: `schMeDtMann`,
  birthYear: 1991,
  job: `devLoPer`,
  bestFriEnds: [`Michael`, `peter`, `Steven`],

  calc_Age: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(jonas1.calc_Age());
console.log(jonas1.age);
console.log(jonas1.age);
