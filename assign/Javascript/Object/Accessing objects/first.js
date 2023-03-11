let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
//nasnii dundaj
function AvgAge(list) {
  let count = 0;
  for (i = 0; i < list.length; i++) {
    count += list[i].age;
  }
  console.log(Math.round(count / list.length));
}
AvgAge(students);

//owog nemeh
let std = students;
std[0].Owog = "Gonchig";
std[1].Owog = "Sumlai";
std[2].Owog = "Dorj";
std[3].Owog = "Goo";
std[4].Owog = "Nergvi";
console.log(students);

//ijil nastai
function equalAge(list) {
  for (i = 1; i < list.length; i++) {
    for (j = 0; j < list.length; j++) {
      if (list[j].age === list[i].age && i > j) {
        console.log(
          list[i].name,
          list[j].name,
          "\t",
          "nariin nas ni adilhan:",
          list[i].age
        );
      }
    }
  }
}
equalAge(students);

//gender number
function GetGender(gen) {
  let count = 0;
  let count2 = 0;
  for (i = 0; i < gen.length; i++) {
    if (gen[i].gender == "male") {
      count++;
    } else {
      count2++;
    }
  }
  console.log(
    " eregtei suragchiin too: ",
    count,
    "\n",
    "emegtei suragchiin too: ",
    count2
  );
}
GetGender(students);
