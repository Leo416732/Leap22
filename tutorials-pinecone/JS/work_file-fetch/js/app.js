const card = document.querySelector(".card");
const breeds = document.querySelector("#breeds");
let op = document.querySelector("option");
let current = "";

function dogsBreeds(data) {
  data.map((dogbreed) => {
    const html = `<option value='${dogbreed}'>${dogbreed}</option>`;
    breeds.innerHTML += html;
  });
}
function genImage(data) {
  const img = `<img src='${data}'>`;
  card.innerHTML = img;
}
console.log();
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    dogsBreeds(data.message);
    fetchIMage(data.message[0]);
  });

function fetchIMage(dogimg) {
  console.log(dogimg);
  fetch(`https://dog.ceo/api/breed/${dogimg}/images/random`)
    .then((res) => res.json())
    .then((data) => genImage(data.message));
}
breeds.addEventListener("change", () => {
  fetchIMage(breeds.value);
  current = breeds.value;
});

card.addEventListener("click", () => {
  fetchIMage(current);
});
