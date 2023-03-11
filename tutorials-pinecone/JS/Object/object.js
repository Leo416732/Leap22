// //object
// //nested- dotor n oortei n adilhan ym ogoh
// //spread operator-
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.fullName() + " " + person.id);
// let employee = {
//   firstName: "Peter",
//   lastName: "Doe",
//   employeeId: 1,
// };

// console.log("ssn" in employee);
// console.log(employee["employeeId"]);

// // name
// let person1 = {
//   firstname: "nara",
//   lastName: "ff",
// };
// person2 = { person1 };
// person2.firstname = "egi";
// console.log(person2.firstname);
// console.log(person1.firstname);

// //array
// let num = [10, 20, 30];
// let num2 = [...num];

// num2[0] = 100;
// console.log(num);
// console.log(num2);

// //object function methods
// console.log(Object.values(person1));

//bodlog
let Athlets = [
  {
    name: "Googii",
    age: 20,
    record: [10, 20, 30],
  },
  {
    name: "Goo",
    age: 25,
    record: [100, 20, 30],
  },
  {
    name: "gii",
    age: 22,
    record: [10, 200, 30],
  },
  {
    name: "gii",
    age: 120,
    record: [10, 200, 30],
  },
];

//age
function getAvaregAge(list) {
  let count = 0;
  let huwaah;
  for (i = 0; i < list.length; i++) {
    count += Athlets[i].age;
    huwaah = count / Athlets.length;
  }
  return Math.round(huwaah);
}
getAvaregAge(Athlets);

//sec
function getAvaregSpeed(list) {
  let count = 0;
  let huwaah;
  for (i = 0; i < list.length; i++) {
    let Cc = 0;
    let HH;
    for (j = 0; j < list[i].record.length; j++) {
      Cc += Athlets[i].record[j];
      HH = Cc / Athlets[i].record.length;
    }
    count += HH;
    huwaah = count / Athlets.length;
  }
  return Math.round(huwaah);
}
getAvaregSpeed(Athlets);

//all
function getAllInfo(list) {
  getAvaregSpeed(list);
  getAvaregAge(list);
}
console.log("Avg age: ", getAvaregAge(Athlets), "years old");
console.log("All Avg: ", getAvaregSpeed(Athlets) + " sec");
