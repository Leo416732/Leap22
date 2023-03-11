let rootElement = document.getElementById("root");
let sec = 0;
let min = 0;
let hour = 0;
let day = 0;
const myInterval = setInterval(function () {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }
  if (hour == 24) {
    hour = 0;
    day++;
  }
  rootElement.innerText = `M:  D:${day < 10 ? "0" : ""}${day} ${
    hour < 10 ? "0" : ""
  }${hour}:${min < 10 ? "0" : ""}${min}:${sec}`;
}, 100);
