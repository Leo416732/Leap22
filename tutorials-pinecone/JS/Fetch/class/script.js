const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
const inputBtn = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");
// https://restcountries.com/v3.1/name/$%7Bcountry%7D
// https://restcountries.com/v3.1/alpha/$%7Bneighbour%7D
let neighbor;
let neighbours = [];
function renderCountry(country, className) {
  console.log(country);
  const html = `<article class="country ${className}">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(
        country.population / 1000000
      ).toFixed(2)}M</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(country.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(country.currencies)[0].name
      } ${Object.values(country.currencies)[0].symbol}</p>
    </div>
  </article>`;
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
  neighbours = country.borders;
}

function getCountry(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      renderCountry(data[0]);
      borders(neighbours);
    });
}

form.addEventListener("submit", (q) => {
  q.preventDefault();
  countriesContainer.innerHTML = "";
  getCountry(q.target.country_name.value);
});

function borders(neighbours) {
  neighbours.forEach((neighbor) => {
    console.log(neighbor);
    fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
      .then((res) => res.json())
      .then((data) => renderCountry(data[0], "neighbour"));
  });
}
