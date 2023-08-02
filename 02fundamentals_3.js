//   The Switch Statement

const day = `sunday`;

switch (day) {
  case `monday`:
    console.log(`Today is a Monday`);
    console.log(`Working day.`);
    break;
  case `tuesday`:
    console.log(`Watching Movie`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`going to delhi`);
    break;
  case `friday`:
  case `saturday`:
    console.log(`going to office`);
    break;
  case `sunday`:
    console.log(`Hay, today is a holiday
Watching a movie`);
    break;
  default:
    console.log(`Not A Day`);
}

//  Statements and Expression

/*   expression are:
       true && false && !false

    */

//    statements

if (23 > 10) {
  const str = `23 is a bigger`;
  console.log(str);
}

const me = `jonas`;
console.log(`i am ${2037 - 1991} years old ${me}.`);

// The Conditional Operators

const age = 23;
age >= 18
  ? console.log(`I like drink wine.`)
  : console.log(`I like to drink water.`);

//   the conditional operators is one line operators

// exaple -1
const drink = age >= 18 ? `Wine🍷` : `Water💧`;
console.log(drink);

// example -2
let drink2;
if (age >= 18) {
  drink2 = `Wine🍷`;
} else {
  drink2 = `water💧`;
}
console.log(drink2);

// example -3
console.log(`i like to drink ${age >= 18 ? `wine🍷` : `Water💧`}`);

// *    *   *
