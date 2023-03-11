let rootEl = document.getElementById("root");
rootEl.style.width = "150px";
rootEl.style.color = "white";
rootEl.style.borderRadius = "10px";
rootEl.style.backgroundColor = "blue";
rootEl.style.display = "flex";
rootEl.style.justifyContent = "center";
rootEl.style.textAlign = "center";
rootEl.style.cursor = "pointer";
rootEl.style.padding = "5px";

window.addEventListener("scroll", () => {
  console.log(window.scrollY); // == 1001
  console.log(innerHeight); // == screen * vh -iin ehnii too
  let perc = document.querySelector("#percentage");
  perc.innerText = `${Math.floor(
    (window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  )} %`;
});

//even odd number
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filter(numbers, callback) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      results.push(numbers[i]);
    }
  }
  return results;
}
const evens = filter(numbers, (n) => {
  return n % 2 === 0;
}); // [2, 4, 6, 8]
const odds = filter(numbers, (n) => {
  return n % 2 !== 0;
}); // [1, 3, 5, 7]
const odd = filter(numbers, (n) => {
  return n % 3 === 0;
}); // [3, 6, 9]
console.log(odd);
console.log(odds);
console.log(evens);
