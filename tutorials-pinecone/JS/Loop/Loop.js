// day 13
/*Loop- dawtalt
while- tegj baih hugtsaand
count- tooloh
increment- count++ -plus
decrement- count-- -minus
scope- {}
temprary- tvr zuur ashiglah 
*/

let countEqual = 16;
while (count >= 1) {
  console.log(countEqual);
  countEqual = countEqual - 1;
}

//  "a" hed bn
let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let numOfA = 0;
let count = 0;
while (count < lorem.length) {
  if (lorem[count] == "l" || lorem[count == "L"]) {
    numOfA = numOfA + 1;
  }
  count = count + 1;
}
console.log(numOfA);

//  "100/3" hed bn
let num = 1100;
let countNum = 0;
while (num > 0) {
  if (num % 3 == 0) {
    countNum++;
  }
  num--;
}
console.log(countNum);

//1-100 niilber
let num1 = 0;
let countPlus = 0;
while (num1 <= 100) {
  countPlus = countPlus + num1;
  num1++;
}
console.log(countPlus);

//Double while
let x = 10;
let countx = 2;
let output = "";

while (x > 0) {
  let y = 20;
  while (y > 0) {
    output = output + countx + "\t";
    if (countx % 20 == 0) output += "\n";
    y--;
    countx += 2;
  }
  x--;
}
console.log(output);
