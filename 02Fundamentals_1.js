/*  JavaScript

 JAVASCRIPT IS A HIGH-LEVEL,OBJECT-ORIENTED, MULTI-PARADIGM,PROGRAMMING LANGUAGE.    */

/* values and variables */

// values

console.log(`ShuBhAm`);
console.log(23);

//  variables

let firstName = `shuBhAm`;
console.log(firstName);

let myFirstJob = `programmer`;
let myCurrentJob = `Teacher`;
console.log(myFirstJob, myCurrentJob);

/*  Data Types
   1. Object
   2. primitive 

primitive data type
   1.Number ~ Floating point number, used for decimals and integers ~ let age = 23;
   2.String ~ Sequence of characters, used for text ~ let firstName = `shuBhAm`;
   3.Boolean ~ logical type that can only be true or false, used for taking decisions ~let fullAge = true;
   4.Undefined ~ Value taken by a variable that is not yet defined ('empty value`) ~ let children;
   5.Null ~ Also means `empty value`
   6.Symbol ~ Value that is unique and cannot be changed. 
   7.BigInt ~ larger integers than the Number type can hold  */

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof `ShuBhAm`);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);
// this is a bug of javaScript

// let, const and var

//  let ~ resigning the value of variables
let age = 30;
age = 35;
console.log(age);

// const ~ Value can`not be changed
const birthYear = 2005;
console.log(birthYear);

// var  ~ old way to define variables
var job = `programmer`;
job = `teacher`;
console.log(job);

lastName = `Jha`;
console.log(lastName);
// Never write this type of variables

// always used const

// Basic operators ~ transfer and combines multiple values

// 1.Arithmetic Operators.(+,-,*,/,%)

const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2005;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);

const $firstName = `ShuBhAm`;
const $lastName = `jha`;

console.log($firstName + ` ` + $lastName);

// 2.Assignment Operators.(=,+=,-=)

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
x--;
console.log(x);

//  Comparison operators(<,>,<=,>=)

const $birthYear = 1990;
const $now = 2023;
const $fulAge = $now - $birthYear;
console.log($fulAge >= 18);

// Operators precedence

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const firstNum = 45;
const secondNum = 50;
const averageNum = (firstNum + secondNum) / 2;

console.log(firstNum, secondNum, averageNum);

/*                * * *          */
