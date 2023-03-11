let day = 5;
let weekname;
if (day === 1) {
  weekname = "Monday";
} else if (day === 2) {
  weekname = "Tuesday";
} else if (day === 3) {
  weekname = "Wednesday";
} else if (day === 4) {
  weekname = "Thursday";
} else if (day === 5) {
  weekname = "Friday";
} else if (day === 6) {
  weekname = "Satarday";
} else if (day === 7) {
  weekname = "Sunday";
} else {
  weekname = "Error";
}
console.log("Tanii oruulsan odor " + weekname);

let weekday = 15;

switch (weekday) {
  case 1:
    console.log("mmonday");
    break;

  default:
    console.log("eerror");
    break;
}
if (
  weekday == 1 ||
  weekday == 2 ||
  weekday == 3 ||
  weekday == 4 ||
  weekday == 5
) {
  console.log("working day");
}

let x = 15,
  y = 40,
  z = 30;

if (x > y) {
  if (x > z) {
    console.log(x, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
} else {
  if (y > z) {
    console.log(y, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
}

if (x > y && x > z) {
  console.log(x, " n hamgiin ih");
} else if (y > z) {
  console.log(y, " n hamgiin ih");
} else {
  console.log(z, " n hamgiin ih");
}

//condation ? true : false;

let age = 17;
const myState = age >= 10 && age <= 18 ? "teenage" : "adult";
