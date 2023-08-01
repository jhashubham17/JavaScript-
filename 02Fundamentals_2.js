// Strings and Template Literals

const firstName = `ShuBhAm`;
const work = `developer`;
const workExp = `2 years`;

const ShuBhAm =
  "i`m " + firstName + " i do work as a " + work + ` since ` + workExp + `.`;
const newShuBhAm = `i'm ${firstName}`;

console.log(newShuBhAm);
console.log(ShuBhAm);

console.log(`String with \n\
multiple \n\
lines`);
// this is a bug

console.log(`String with
multiple
lines`);
//  always use this

// Taking Decision if else Statements

const age = 15;
const ageLeft = 18 - age;

if (age >= 18) {
  console.log(`You can drive now👍.`);
} else {
  console.log(`Wait ${ageLeft} years more😀.`);
}

// Type Conversion and Coercion

// Type Conversion

const inputAge = `1991`;
console.log(inputAge + 18);

const $inputAge = `1991`;
console.log(Number($inputAge) + 18);
// change into String into number

console.log(Number(`shuBhAm`));
// this is not convert into number
console.log(typeof NaN);

console.log(String(23), 23);
//  change into Number into String

// Type Coercion

console.log(`i am ` + 23 + ` year old`);
console.log(`20` - `5` - 10);
console.log(`20` / `2`);

let n = `1` + 1;
n = n - 1;
console.log(n);

console.log(2 + 8 + 12 + `5`);
console.log(`10` - `4` - `3` - 2 + `5`);

// TRUTHY AND FALSY VALUES

// 5 Falsy Values : 0, ` `, undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 0;

if (money) {
  console.log("Don`t spend it all.");
} else {
  console.log(`You Should get a Job.`);
}

const height = 0;
if (height) {
  console.log(`YaY height is defined.`);
} else {
  console.log(`Height is undefined.`);
}

//  EQUALITY OPERATORS: == vs ===

// Example-1
const totalAge = 18;

if (totalAge == 18) console.log(`yoy just became an adult :D (strict)`);
if (totalAge === 18) console.log(`You just become an adult :D(loose)`);

//  different between ==/===

const total_Age = `18`;

if (total_Age == 18) console.log(`yoy just became an adult :D (strict)`);
if (total_Age === 18) console.log(`You just become an adult :D(loose)`);

// example -2

let jerseyNum = Number(prompt(`Enter a jersey Number`));
// first convert string to number jersey number is string now, change a Number

console.log(jerseyNum);
console.log(typeof jerseyNum);

if (jerseyNum === 18) {
  console.log(`Hey this is Virat kohli jersey Number`);
} else if (jerseyNum === 7) {
  console.log(`Hey this is Ms Dhoni jersey Number`);
} else if (jerseyNum === 17) {
  console.log(`Hey this is AB devilies jersey Number.`);
} else console.log(`Now, This Number can Choose Your jersey Number`);

//  logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);

const isTried = false;
if (hasDriversLicense && hasGoodVision && !isTried) {
  console.log(`Sarah is able to Drive!.`);
} else {
  console.log(`Someone else should drive..`);
}
