//  Using Google, StackOverFlow And Mozilla

// Example
"use strict";

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, ` ,`, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//  Debugging (Fixed Errors)

/* What is a Software bug?
Software bug : Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bug.

Bugs are completely normal in software development!

Example
reverse([1, 3, 7, 9])

   [7, 1, 9, 3]
Unexpected result: the array is scrambled, Not reversed. So there is a bug in the reverse function
   

~ Debugging : process of finding, fixing and preventing bugs.        

The Debugging process

1. Identify ~
(Becoming aware that there is a bug)
 1. During development 
 2. Testing software 
 3. user reports during production 
 4. Context: browsers, users etc.

2. Find ~ (Isolating where exactly the bug is happening in code)
1. Developer console(simple code) 
2. Debugger (complex code)

3. Fix ~ (Correct the bug)
1. replace wrong solution with new correct solution

4. Prevent ~ (Preventing it from happing again)
1. Searching for the same bug in similar code 
2. Writing tests using testing software */

// Example ~

const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: Number(prompt(`Degrees celsius:`)),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//  use number function because prompt is a string
