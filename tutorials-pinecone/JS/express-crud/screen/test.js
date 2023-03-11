let button = document.querySelector(".getCars");
let AllCar = document.querySelector("#root");
let body = document.querySelector("body");
const toyCars = document.querySelector(".toyota");
const lexCars = document.querySelector(".lexus");
const selectCars = document.querySelector(".select");
const CarsImg = document.querySelector(".carImage");

button.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => AllCars(data));
});
toyCars.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => ToyotaCars(data));
});

lexCars.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => LexusCars(data));
});

fetch("http://localhost:3333/api/cars", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => Options(data));

//All car gen
AllCar.style.display = "flex";
AllCar.style.flexWrap = "wrap";
AllCar.style.gap = "30px";
function AllCars(cars) {
  AllCar.innerHTML = "";
  console.log(cars);
  cars.map((car) => {
    const html = `<div class="card" style="width: 18rem;">
    <img src="${car.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${car.model}</h5>
      <p class="card-text">${car.brand}</p>
    </div>
  </div>`;
    AllCar.innerHTML += html;
  });
}

//Toyota
function ToyotaCars(cars) {
  AllCar.innerHTML = "";
  console.log(cars);
  cars.map((car) => {
    console.log(car.brand);
    if (car.brand == "Toyota") {
      const html = `<div class="card" style="width: 18rem;">
    <img src="${car.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${car.model}</h5>
      <p class="card-text">${car.brand}</p>
    </div>
  </div>`;
      AllCar.innerHTML += html;
    }
  });
}
//Lexus
function LexusCars(cars) {
  AllCar.innerHTML = "";
  console.log(cars);
  cars.map((car) => {
    console.log(car.brand);
    if (car.brand == "Lexus") {
      const html = `<div class="card" style="width: 18rem;">
    <img src="${car.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${car.model}</h5>
      <p class="card-text">${car.brand}</p>
    </div>
  </div>`;
      AllCar.innerHTML += html;
    }
  });
}
//npm i
//npm i cors

function Options(cars) {
  cars.map((car) => {
    if (car.brand == car.brand) {
      const html = `<option id='${car.model}'>${car.model}</option>`;
      selectCars.innerHTML += html;
    }
  });
}

CarsImg.addEventListener("change", () => {});
