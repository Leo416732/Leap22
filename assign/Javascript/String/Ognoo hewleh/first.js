let year = 2022;
let yearstr = year.toString();
let month = 1;
let day = 1;
if (month < 10 && day < 10) {
  console.log(yearstr.concat("-0", month, "-0", day));
} else if (month < 10) {
  console.log(yearstr.concat("-0", month, "-", day));
} else if (day < 10) {
  console.log(yearstr.concat("-", month, "-0", day));
} else {
  console.log(yearstr.concat("-", month, "-", day));
}

let phoneNumber = 8306530;
let phoneNstr = phoneNumber.toString();
let phoneN = phoneNstr.substring(0, 2);
if (phoneN == 83 || phoneN == 93 || phoneN == 97 || phoneN == 98) {
  console.log("G-mobile");
} else if (phoneN == 80 || phoneN == 86 || phoneN == 88 || phoneN == 89) {
  console.log("Unitel");
} else if (phoneN == 99 || phoneN == 94 || phoneN == 95) {
  console.log("Mobicom");
} else if (phoneN == 91 || phoneN == 90 || phoneN == 96) {
  console.log("Skytel");
} else {
  console.log("Уучлаарай буруу дугаар оруулсан байна");
}
