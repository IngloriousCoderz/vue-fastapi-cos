console.log(Boolean(1));
console.log(!!1);
console.log(!!0);
console.log(!!"true");
console.log(!!"false");
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

const favoriteFood = "";

console.log(favoriteFood || "cheesburger");
console.log(favoriteFood != null ? favoriteFood : "cheesburger");
console.log(favoriteFood ?? "cheesburger");

const numberOfKids = 0;

console.log(numberOfKids || "I don't know");
console.log(numberOfKids != null ? numberOfKids : "I don't know");
console.log(numberOfKids ?? "I don't know");
