let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //true
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(x);
console.log(xi);
console.log(ix);
console.log(iix);

let one = 4 > 3 && 10 < 12; // true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //false
let ten = !(4 === "4"); //true
console.log(ten);

/*let myAge = prompt("My Age");
let yourAge = prompt("Your Age");
if (myAge > yourAge) {
  alert("Me");
} else {
  alert("You");
}*/

let workingDay = 1;
switch (workingDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working Day");
    break;
  case 6:
  case 7:
    console.log("Not working Day");
    break;
  default:
    console.log("Error");
    break;
}

let hours = prompt("Hours");
let ratePerHour = 28;
let pay = hours * ratePerHour;
alert(pay + "$" + " Your pay");
