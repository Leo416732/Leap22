/*Math.abs- modul- sorog toog eyreg bolgoh
Math.ceil- taaz- float toog deeshe tegshleh
Math.floor- shal
Math.round- toimloh
Math.pow- zereg oloh
*/
//day-12
let myStr = "single quotes ' double quotes \" ";
let babyshark = "baby shark baby shark \nbaby shark";
console.log(myStr);
console.log(babyshark.length);
console.log(babyshark.charAt(0));
console.log(babyshark[babyshark.length - 1]);

const str = "life";
console.log(str.toUpperCase());

let firstName = "John";
let fullName = firstName.concat(" ", "Smith");
console.log(fullName);

let sub = "a This is a string";
console.log();
console.log(sub.indexOf("is"));

//is clear

let myString = "abc is alphabetis is not";
console.log(myString.indexOf("is"));
let firstPart = myString.substring(0, myString.indexOf("is"));
let lastPart = myString.substring(
  myString.indexOf("is") + "is".length,
  myString.length
);
myString = firstPart.concat(lastPart);

firstPart = myString.substring(0, myString.indexOf("is"));
lastPart = myString.substring(
  myString.indexOf("is") + "is".length,
  myString.length
);
myString = firstPart.concat(lastPart);
console.log(myString);

//number

let number = 12.234546576;
let displayNumber = number.toFixed(2);
console.log(displayNumber);

console.log(Math.ceil(Math.random() * 6));
