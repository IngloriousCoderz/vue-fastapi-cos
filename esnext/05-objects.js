const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",
  legs_number: 2,
};

// CRUD

// square bracket notation
console.log(person["firstName"]);

// dot notation
console.log(person.firstName);

// special characters: I'm forced to use SBN
console.log(person["last-name"]);

// property name is not known
const propertyName = "firstName";
console.log(person[propertyName]);

console.log(person.legs_number);
