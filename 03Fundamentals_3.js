// Iteration ~ The The Loop

// 1. For loop
// for loop keeps running while condition is True

for (let num = 1; num <= 10; num++) {
  console.log(num);
}

//  Looping Array, Breaking and Continue

//  Example~ 1
const jonas = [`jonas`, `smith`, 2023 - 1991, `teacher`, `Indian`];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
}

// Example ~ 2

const years = [1991, 1981, 1971, 1961];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//  Continue and Break

console.log(` Only Strings `);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== `string`) continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log(` Break With Number `);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == `number`) break;
  console.log(jonas[i], typeof jonas[i]);
}

// looping  Backwards and loop in loops

const jonas1 = [
  `jonas`,
  `smith`,
  2023 - 1991,
  `teacher`,
  `Indian`[(`Peter`, `Steven`, `Michael`)],
];
for (let i = jonas1.length - 1; i >= 0; i--) {
  console.log(i, jonas1[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-- Starting Exercise-- ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`--Lifting Weight Repetition-- ${rep}`);
  }
}

// While loop

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`Loop is about to end..`);
}
