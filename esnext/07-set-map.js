const numbers = [1, 2, 2, 3, 4, 3, 5];
const noDuplicated = [...new Set(numbers)]; // idiom
console.log(noDuplicated);

const person = new Map();
person.set("firstName", "Matteo Antony");
person.set(2, "legs");
const personObj = Object.fromEntries(person);
console.log(person, personObj, Object.keys(personObj));
