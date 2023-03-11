let bgCont = document.getElementById("bg");
let body = document.querySelector("body");
bgCont.addEventListener("click", () => {
  body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
