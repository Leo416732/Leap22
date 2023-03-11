let i = 0;
document.getElementById("root").innerText = "Helllo";
document.getElementsByClassName("dummy")[0].style.backgroundColor = "gray";
document.querySelector(".dummy").style.height = "50px";
document.getElementsByTagName("div")[0].innerHTML = "<div><h1>Hela</h1></div>";
const interval = setInterval(function () {
  i++;
  if (i == 255) {
    clearInterval(interval);
  }
  document.querySelector(".dummy").style.width = `${i}px`;
  document.querySelector(".dummy").style.backgroundColor = `rgb(${i},150,0)`;
}, 10);
