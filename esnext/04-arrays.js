const numbers = [1, 2, 3, 4, 5];

// CRUD
{
  const firstItem = numbers[0];
  const secondItem = numbers[1];
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, lastItem);

  numbers[2] = 7;
  console.log(numbers);

  const url = "/api/users/1/profile";
  const arr = url.split("");
  console.log(arr);
  arr[2] = "x";
  console.log(arr);
  console.log(arr.join(""));

  // const a = 2;
  // a = 3;

  // numbers = [6, 7, 8, 9]

  numbers.push(6);
  console.log(numbers);

  numbers.pop();
  console.log(numbers);

  numbers.shift();
  console.log(numbers);

  numbers.unshift(1);
  console.log(numbers);

  numbers.splice(2, 2, 3, 4);
  console.log(numbers);
}

// destructuring
{
  const [firstItem, , thirdItem] = numbers;
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, thirdItem, lastItem);

  const vector3d = [3, 0, 4];

  {
    const X_COORD = 0;
    const Y_COORD = 1;
    const Z_COORD = 2;
    const x = vector3d[X_COORD];
    const y = vector3d[Y_COORD];
    const z = vector3d[Z_COORD];
    console.log(x, y, z);
  }

  {
    const [x, y, z] = vector3d;
    console.log(x, y, z);
  }
}

// array spread operator (rest)

{
  const [firstItem, secondItem, ...rest] = numbers;
  console.log(firstItem, secondItem, rest, numbers.slice(2));

  const newNumbers = [secondItem, firstItem, ...rest];
  console.log(newNumbers, numbers);
}

// immutable push
{
  // const pushedNumbers = numbers.slice(0)
  const pushedNumbers = [...numbers];
  pushedNumbers.push(6);
  console.log(numbers, pushedNumbers);
}

{
  const pushedNumbers = [...numbers, 6];
  console.log(numbers, pushedNumbers);
}

// immutable pop
{
  const poppedNumbers = numbers.slice(0, -1);
  console.log(numbers, poppedNumbers);
}

// immutable shift
{
  const [, ...shiftedNumbers] = numbers;
  console.log(numbers, shiftedNumbers);
}

// immutable unshift
{
  const unshiftedNumbers = [0, ...numbers];
  console.log(numbers, unshiftedNumbers);
}

// immutable splice
{
  const splicedNumbers = [...numbers.slice(0, 2), 6, 7, ...numbers.slice(4)];
  console.log(numbers, splicedNumbers);
}

console.log(numbers.includes(2));

const obj1 = {};
const obj2 = {};
console.log(obj1 !== obj2, JSON.stringify(obj1) === JSON.stringify(obj2));

const objects = [obj1];
console.log(objects.includes(obj1), objects.includes(obj2));

const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
  console.log("Ok!");
}
if (httpStatus === 301 || httpStatus === 304) {
  console.log("Modified/redirected");
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    console.log("Ok!");

  case 301:
  case 304:
    console.log("Modified/redirected");

  default:
}

const SUCCESS_CODES = [200, 201, 204];
const MODIFIED_CODES = [301, 304];

if (SUCCESS_CODES.includes(httpStatus)) {
  console.log("Ok!");
} else if (MODIFIED_CODES.includes(httpStatus)) {
  console.log("Modified/redirected");
}
