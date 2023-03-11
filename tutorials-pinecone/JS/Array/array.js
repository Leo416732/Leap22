// day-15
// date
const Jan01_1970 = new Date(0);
console.log(Jan01_1970);
// age + 1
// let studentAge = [10, 20, 30, 40, 50];
// student[5];
// for (let num = 0; num < studentAge.length; num++) {
//   student[i]++;
// }
// console.log(student);

// hamgiin urt neriig ol
let studentName = [
  "narandelgerekh",
  "munkhsuld",
  "doldo",
  "sharawnymbuu",
  "dorjee",
  "dulmaa",
];
let longName = studentName[0];
let max = longName.length;
let i = 1;
while (i < studentName.length) {
  if (max < studentName[i].length) {
    longName = studentName[i];
    max = studentName[i].length;
  }
  i++;
}
console.log(longName);
console.log(max);

// ehnii 3t d nertei hvniig iig oloh
let Dnames = [];
let iC = 0;
let jC = 0;
while (iC < studentName.length) {
  if (studentName[iC][0] === "d") {
    Dnames[jC] = studentName[iC];
    jC++;
  }
  iC++;
}
console.log(Dnames);

// array
// let x;
// for (let i = 0; i < x.length; i++) {}

// documnet object modul
