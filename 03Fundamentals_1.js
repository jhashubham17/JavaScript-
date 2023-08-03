//  Activating Strict Mood
//  to Avoide Accidental error

`use strict`;
let hadDiversLicense = false;
const passTest = true;

if (passTest) hadDiverLicense = true;
if (hadDiversLicense) console.log(`i can drive`);

// interface private if ~ reserved keyboard

//  Function

function logger() {
  console.log(`My Name Is Jonas`);
}
// calling / running / invoking function
logger();

//  Function with Parameters

function fruitJuice(apple, orange) {
  const juice = `juice with ${apple} apple and ${orange} orange.`;
  return juice;
}
fruitJuice(2, 5);
const appleJuice = fruitJuice(2, 5);
const orangeJuice = fruitJuice(5, 3);
console.log(appleJuice);
console.log(orangeJuice);

// Function Declarations vs. Expressions

// Function Declaration

function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2005);

// Function Expressions

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2005);
console.log(age1, age2);

//   Arrow Function

// example-1

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

// example-2

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} Years`;
};
console.log(yearUntilRetirement(2005, `ShuBhAm`));

// Function Calling Other Function

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(4, 7));

// Reviewing Function

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retires.`);
    return -1;
  }
};
console.log(yearsUntilRetirement(2000, `ShuBhAm`));
console.log(yearsUntilRetirement(1950, `ShuBh`));
