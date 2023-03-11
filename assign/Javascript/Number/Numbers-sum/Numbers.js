let num = 923;
let toSt = num.toString();
let firstNum = toSt.substring(0, 1);
let firstNum1 = parseInt(firstNum);

let secondNum = toSt.substring(1, 2);
let firstNum2 = parseInt(secondNum);

let thirdNum = toSt.substring(2, 3);
let firstNum3 = parseInt(thirdNum);
let numberPlus = firstNum1 +firstNum2 + firstNum3;
console.log(numberPlus);