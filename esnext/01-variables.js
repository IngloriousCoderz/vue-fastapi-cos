var a;
a = 1;

var a = 1;

// block scoping
{
  var a = 1;
}

function myFunc() {
  var a = 1;
  // hoisting
  b = 2;
}

for (var i = 0; i < 10; i++) {}

{
  let a = 1;
  a = 2;
}

const b = 2;
// b = 3;

let num = 1;
console.log(typeof num);
let obj = {};
console.log(typeof obj);
let arr = [];
console.log(typeof arr, Array.isArray(arr));
let nil = null;
console.log(typeof nil, nil == null);
let undef = undefined;
console.log(typeof undef);

console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log(null === undefined); // strict equal operator
console.log(1 == "1");
console.log(1 === Number("1"));
console.log(1 === +"1");
console.log(1 === "1");

let notANumber = NaN;
console.log(typeof NaN, Number.isNaN(notANumber));
let infinity = Infinity;
console.log(typeof infinity, Number.isFinite(infinity));

let shouldBeNaN = 1 / 0;
console.log(shouldBeNaN);

const PI = 3.14;
const PRIMARY_COLOR = "#b543df"; // upper snake case

const WORKING_DAYS_IN_A_WEEK = 5;

for (let i = 0; i < WORKING_DAYS_IN_A_WEEK; i++) {
  // magic number
  console.log(i);
}

const age = 2025 - 1982;
