'use strict';
/** All numebrs in javascript are floating point numbers and they are stored in 64 base 2 formt
 */
console.log(23 === 23.0);

// some base 2 numbes are very difficult to be shown in JS ==JS should not be used ot run very precise calculations or financial calculatons
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log('');

//Type coersion --Code looks a lot cleaner in this instance :: Usingf type coersion instead of using the number function
console.log(Number('23'));
console.log(+'23');
console.log('');

// PArisong -- Has to start with a number :: removes a lot of unnecessary letters :: Parsing is more adcanced than just alone numbers ( )
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e30px', 10));
console.log(Number.parseInt('10010010', 2));
console.log('');

// Stops at the decimal point
console.log(Number.parseFloat('2.5rem', 10));
console.log(Number.parseInt('2.5rem', 10));
console.log('');

//Globl Functions and so we do not need to call on numbers ::Not recommended :: need to use namespance in modenn codes
console.log(parseInt('2.5rem', 10));

// To chekc if a value is NaN -- Only check for NANs
console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(20 / 0));
console.log('');
console.log('');

// To check if something is a number ??
console.log(Number.isFinite(20));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(20 / 0));
console.log('');
console.log('');

// TO check fotr integers and strings
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(20 / 0));
console.log('');
console.log('');
/**
What is 20.0 in JavaScript?
JavaScript has only one number type: Number (IEEE 754 double precision floating-point).
So 20, 20.0, 20.000000 are all stored the same way internally.
They are literally just 20.
 */

// Having fun with JS
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log('');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, 23.0, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // Does not do type coersion
console.log('');
console.log(Math.min(5, 18, 23, 11, 2));
console.log('');
console.log(Math.PI);
// Area of a radius of circle with 10px
console.log(Math.PI * parseFloat('09px') ** 2);
console.log('');
console.log(Math.trunc(Math.random() * 6) + 1);
console.log('');

// If there are braces then I have to explicitly write the return statement. If I want to not write the retunr statement for one liner codes trhen I have to remove the braces and jst keeo hte line of the arrow function for the code to work
/** 
🚫 Only works for numbers 1 through 6 (like rolling a die).
🚫 If you want another range (say 10–20), you must rewrite the whole formula.
⚠️ Uses Math.trunc(), which works here, but Math.floor() is safer for ensuring inclusivity when ranges shift (especially with negatives).
*/
const randomINT = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomINT(20, 10));
console.log(randomINT(3, 0));

// Rounding integers - methods also do type coersion - floor works better than trunc when dealing with negative numbers and so it sis a good practise to use fllor instead

console.log(Math.trunc(23.0));

console.log(Math.round(23.0));
console.log(Math.round(29.0));

console.log(Math.ceil(23.0));
console.log(Math.ceil(29.0));

console.log(Math.floor(23.0));
console.log(Math.floor(29.0));
console.log('');
console.log('');
console.log(Math.trunc(23.0));
console.log(Math.trunc(-23.7)); // leans towards 0, O:  -23
console.log(Math.floor(-23.7)); // leans towards -∞, O: -24

// .TOfiXED-defaults to strings
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.7).toFixed(2));
console.log((2.73456).toFixed(3));
console.log(+(2.73456).toFixed(2)); // Results in a number

//const amount = +inputLoanAmount.value; Math.flor Does automatic type coersion and so we do not need to specify using hte + explicitly

console.log('');
console.log('');
console.log('');
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(6 % 2);
console.log(7 % 2);

// Check for even or odds ??
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(5));
console.log(isEven(6));

// Best case scenario to use this :: Repeat a step every nth time :: Like color something orange every third iteration like in htis example we are going to do below::

// document.querySelector('.movements__row This creates a node list and for us to be able to perform perfprm oeprations on it it is better if we are gooing to be doing them in arrays. In order for them to be converted to arratys we use the spread operator

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'aquamarine';
    if (i % 3 === 0) row.style.backgroundColor = 'teal';
  });
});
// Numeeric Separators shoud not be used for string values that we get from apio calls
/**
 * They should also not be used for befthe the actual number, before or after the decimal points, and on strings
 */

const diameterOfSolarSystem = 287_460_000_000;
console.log(diameterOfSolarSystem);
const priceOfCandles = 259_99;
console.log(priceOfCandles);
const PI = 3.1;

console.log('');
console.log('');
console.log('');
// Big Ints

console.log(2 ** 53 - 1); // Max safe integer :: integer limit
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // They don't work properly
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log('');
console.log(232332442234234254234534534535345345n);
console.log(232332442234234254234534534535345345n * 1002323230n); // works

const numRegular = 23;
const hugeNum = 28121231233422342341231231434n;
// console.log(numRegular * hugeNum); // doesn't work
console.log(BigInt(numRegular) * BigInt(hugeNum)); // works
console.log('');

console.log('');
console.log(20n > 15); // works
console.log(20n === 15); // doesn't work as triple operator does not do type coersion
console.log(20n == 15); // works as type coersion done
console.log(typeof 20n); // works
console.log('');

console.log('');
console.log(`${hugeNum} is really big`); // type coersion done here
console.log(hugeNum + ' is really big'); // type coersion done here
console.log('');

console.log('');
// console.log(11n / 3); Does not work
console.log(11n / 3n); //O: 3n
console.log(12n / 3n); //O: 4n
console.log(10n / 3n); //O: 3n
console.log(10 / 3); //O: 3.33333333333333333

console.log('');
console.log('');
console.log('');

const now = new Date(); // Creates thhe current date and tuime
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41')); // This can be done to create the entire date object
console.log(new Date('December 24, 2015')); // This is not recommended
console.log(new Date(account1.movementsDates[0])); //Retreices the first date instance on movementDates of account 1

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Also ised to create dates
console.log(new Date(2037, 10, 31)); // Same same but different

console.log(new Date(0)); // first day of the unix time stamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days of the unix timestamp converted to millisoconds

// Working with dates // all of the getter methods od dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // currentDay
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // following ISO standard
console.log(future.getTime());

console.log(new Date(2142235380000)); // milliseconds passed since Jan 1 1970 till nov 10 2037

console.log(Date.now()); // milliseconds passed till the present
future.setFullYear(2040); // setterMethod like getter ethods
console.log(future.setFullYear(2040)); // timestamp of future

console.log('');
console.log('');
console.log('');
console.log('');
console.log('');

const newDate = new Date(2037, 10, 19);
console.log(+newDate); // represented in milliseconds from jan 1 1970

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log('');

const days1 = calcDaysPassed(new Date(2024, 11, 2), new Date(2024, 11, 22));
console.log(days1);

console.log('');
console.log('');
console.log('');
console.log('');

// unit is not explicitly given
const num = 23232354.564;
const options = { style: 'currency', unit: 'celsius', currency: 'EUR' };
console.log('US:       ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:    ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  '    ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// I was right partially, we do not need to create three objects, one object would do just fine as the object is getiing renewed every seconds

const clock = setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

// Stop after 10 seconds (optional)
setTimeout(() => {
  clearInterval(clock);
  console.log('Clock stopped');
}, 10000);

// Others

/** Set timeout simply runs a function after a certain amount of time ::: Callback function is only executed once
 * Not ideal if we want to run our functions every five minutes or every 10 minutes -- When we want this we want to use the set timeout functionm
 */
//
/**
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
 

/** sert timeout functions -----------> Actual Code
 * Format the date object as an actual clock that shows hours, minutes and seconds
 * Update hours, minutes and seconds accordingly
 */
/**
 console.log(now.toISOString()) :: Don't want this as this gives me z format;
 * 
 */

// const sec1 = new Date();
// console.log(sec1.getSeconds());

// // const sec = setInterval(() => {
// //   console.log(`${sec1.getSeconds()} seconds`);
// // }, 1000);
// -----------> This can't happen as it is printing the same seconds every second and so it needs a new object to be created every secnsd

// const sec = setInterval(() => {
//   const seconds = new Date();
//   console.log(`${seconds.getSeconds()} seconds:`);
// }, 1000);

// const min = setInterval(() => {
//   const minutes = new Date();
//   console.log(` ${minutes.getMinutes()} minutes:`);
// }, 60000);

// const hour = setInterval(() => {
//   const hours = new Date();
//   console.log(`${hours.getHours()} hours`);
// }, 600000);

// console.log(sec, min, hour);

// setTimeout(() => {
//   clearInterval(sec);
//   clearInterval(min);
//   clearInterval(hour);
//   console.log('Interval stopped');
// }, 3000);
