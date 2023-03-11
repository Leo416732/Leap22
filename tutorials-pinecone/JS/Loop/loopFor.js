//day 14
/*row - mor

*/
// let i1 = 1;
// while (i1 <= 10) {
//   console.log(i1);
//   i1++;
// }
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i, " ", j);
//   }
// }

//gurwaljin
// let n = 10;
// let output = "";
// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     if (col <= row) {
//       output += col + " ";
//     }
//   }
//   output += "\t" + "\n";
//   debugger;
// }
// console.log(output);

// 000 number
let num = "132456789";
console.log(num.charAt(num.length - 3));
console.log(num.substring(1, 3));
num =
  num.substring(0, num.length - 3) +
  "_" +
  num.substring(num.length - 3, num.length);
console.log(num);

// pass
// let pass = "123";
// let input;
// while (input !== pass) {
//   input = prompt("enter your password");
// }

// // number shalgah
// let number;
// while (true) {
//   number = prompt("enter");
//   let firstChar = number.charAt(0);
//   number = Number(number);
//   if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8")) {
//     break;
//   }
// }

//anhdagch too
let too = 293;
let prime = true;

for (let i = 2; i < too; i++) {
  if (too % i == 0) {
    prime = false;
    break;
  }
}

if (prime) {
  console.log("Anhnii too");
} else {
  console.log("Anhnii too bish");
}

// piramid
let count = 1;
let output = "";
for (let row = 1; row <= 4; row++) {
  for (let dash = 4 - row; dash > 0; dash--) {
    output += " ";
  }
  for (let num = 1; num <= row; num++) {
    output += count + " ";
    count++;
  }
  output += "\n";
}
console.log(output);
