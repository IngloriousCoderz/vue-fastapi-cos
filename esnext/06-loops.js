const numbers = [1, 2, 3, 4, 5];
const person = { firstName: "Matteo Antony", lastName: "Mistretta", age: 43 };

const square = (num) => num ** 2;
const isEven = (num) => !(num % 2);
const sum = (num1, num2) => num1 + num2;

{
  // index-based, old style
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    console.log(i, item);
  }

  // for-in, on objects, old style
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(key, value);
    }
  }

  // for-in on arrays, WRONG
  // numbers = { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  for (const index in numbers) {
    const item = numbers[index];
    console.log(index, item);
  }

  // for-of, only on arrays, no index
  for (const item of numbers) {
    const index = numbers.indexOf(item); // O(n^2)!
    console.log(index, item);
  }
}

// iterating on an object - new style

{
  const keys = Object.keys(person);
  for (const key of keys) {
    const value = person[key];
    console.log(key, value);
  }

  const values = Object.values(person);
  for (const value of values) {
    console.log(value);
  }

  const entries = Object.entries(person);
  for (const [key, value] of entries) {
    console.log(key, value);
  }
}

{
  const entries = [
    ["firstName", "Matteo Antony"],
    ["last-name", "Mistretta"],
  ];
  const person = Object.fromEntries(entries);
  console.log(person);
}

// ARRAY METHODS

// print: prints all items

{
  numbers.forEach((item, index, arr) => {
    console.log(item, index, arr);
  });

  const log = (item, index, arr) => {
    console.log(item, index, arr);
  };

  numbers.forEach(log);

  numbers.forEach((item, index, arr) => {
    log(item, index, arr);
  });

  const doLog = (item, index, arr) => {
    log(item, index, arr);
  };

  numbers.forEach(doLog);

  // idiom: short-circuit
  numbers.forEach(console.log);

  numbers.forEach((item) => console.log(item));

  numbers.forEach(console.log);
}

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    const squared = square(item);
    squares.push(squared);
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item, index, arr) => {
    const squared = square(item);
    return squared;
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item) => square(item));
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item, index, arr) => square(item, index, arr));
  console.log(squares, numbers);
}

{
  const squares = numbers.map(square);
  console.log(squares, numbers);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens, numbers);
}

{
  const evens = numbers.filter((item) => isEven(item));
  console.log(evens, numbers);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens, numbers);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven = null;
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven);
}

{
  // 1. concise
  // 2. declarative
  // 3. human-readable
  // 4. performant
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

{
  const lastEven = numbers.findLast(isEven);
  console.log(lastEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

{
  const lastEvenIndex = numbers.findLastIndex(isEven);
  console.log(lastEvenIndex);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (!hasEven && isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEvens: [1, 2, 3, 4, 5] -> false

{
  let allEvens = true;
  numbers.forEach((item) => {
    if (allEvens && !isEven(item)) {
      allEvens = false;
    }
  });
  console.log(allEvens);
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0; // init
  numbers.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // return
}

// slightly more performant
{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem; // init
  rest.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // return
}

{
  const summation = numbers.reduce((acc, item, index, arr) => {
    acc += item;
    return acc;
  }, 0);
  console.log(summation);
}

// slightly more performant
{
  const summation = numbers.reduce((acc, item, index, arr) => {
    acc += item;
    return acc;
  });
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item) => {
    acc = sum(acc, item);
    return acc;
  });
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item) => {
    return sum(acc, item);
  });
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item) => sum(acc, item));
  console.log(summation);
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

{
  const squares = numbers.reduce((acc, item) => [...acc, square(item)], []);
  console.log(squares);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let acc = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      const squared = square(item);
      acc = sum(acc, squared);
    }
  });
  console.log(acc);
}

{
  const sumOfSquareEvens = numbers.reduce((acc, item) => {
    if (isEven(item)) {
      const squared = square(item);
      acc = sum(acc, squared);
    }
    return acc;
  }, 0);
  console.log(sumOfSquareEvens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
  const squareEvens = evens.map(square);
  console.log(squareEvens);
  const sumOfSquareEvens = squareEvens.reduce(sum);
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers.filter(isEven).map(square).reduce(sum);
  console.log(sumOfSquareEvens);
}

// sumOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  const sumOfSquareEvens = numbers.reduce((acc, item) => {
    const squared = square(item);
    if (isEven(squared)) {
      acc = sum(acc, squared);
    }
    return acc;
  }, 0);
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}
