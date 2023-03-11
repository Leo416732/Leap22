//day 16
/*
function - punkts
return - butsaah
argument - 
parameter -
parantheses - 
carly brachet - 
*/

// function
function greet() {
  console.log("hello");
}
greet();
greet();
greet();

// return
function getRectArea(width, height, index) {
  if (width > 0 && height > 0 && index > 0) {
    return width + height + index;
  }
  return 0;
}
let result1 = getRectArea(114, 114, 114);
console.log(result);
console.log(getRectArea(3, 4, 2));

// challenge
function result() {
  let num1 = parseFloat(23);
  let num2 = parseFloat(12);
  return num1 + num2;
}
console.log(result());

let num1 = parseFloat("12");
let num2 = parseFloat("123");
let result12 = add(num1, num2);

function add(num1, num2) {
  return num1 + num2;
}
console.log(result12);

// function expression
let a = function (name) {
  return "Hello " + name;
};
console.log(a("lei"));

// arrow function
const b = (name) => {
  return "Haello " + name;
};
console.log(b("name"));

// reverse word
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const input = "Hello World";
function converter(string) {
  let result = "";
  for (i = 0; input.length > i; i++) {
    if (upper.includes(string[i])) {
      result += string[i].toLowerCase();
    } else if (lower.includes(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(converter(input));

//classwork Js function
let num = 4;

// factorial
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(num));
