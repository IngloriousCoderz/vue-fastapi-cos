let person = {
  name: "Matteo Antony",
  legs: ["left", "right"],
  speak() {
    return "Hello world!";
  },
};

person = undefined;

console.log(person ? person.name : undefined);
console.log(person?.name);

person = {};

console.log(person.legs);
console.log(person.legs.length);
console.log(person.legs ? person.legs[0] : undefined);
console.log(person.legs?.[0]);

console.log(person.speak);
console.log(person.speak ? person.speak() : undefined);
console.log(person.speak?.());
