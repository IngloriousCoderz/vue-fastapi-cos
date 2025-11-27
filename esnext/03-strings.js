const singleQuotes = 'Hello "world", how are you?';
const doubleQuotes = "Hello 'world', how are you?";

const concatenation = singleQuotes + doubleQuotes;
console.log(concatenation);

console.log("1" + "1");
console.log(1 + 1);
console.log(1 + "1");
console.log(1 + "hello");
console.log(1 - "1");
console.log(1 - "hello");
console.log(1 + parseInt("1"));
console.log(1 + parseInt("1hello"));
console.log(1 + Number("1"));
console.log(1 + Number("1hello"));
console.log(1 + +"1");
console.log(1 + +"1hello");

const templateLiteral = `I can use 'single' and "double" \`quotes\`
They are multiline too!
We can interpolate ${"expressions".toUpperCase()}!!!`;
console.log(templateLiteral);

const html = `
<p class="paragraph">
  hello world!
</p>`;
console.log(html);

const userId = 1;
const url = "/api/user/" + userId + "/profile";
const betterUrl = `/api/user/${userId}/profile`;
console.log(url, betterUrl);

// CRUD

const firstCharacter = url[0];
const lastCharacter = url[url.length - 1];
console.log(firstCharacter, lastCharacter);

url[2] = "x";
console.log(url);

console.log(url.slice(0, 2) + "x" + url.slice(3));
console.log(`${url.slice(0, 2)}x${url.slice(3)}`);
