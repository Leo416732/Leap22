let root = document.querySelector(".root");
let input = document.querySelector(".input");
let btn = document.querySelector(".button");

fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((data) => users(data));

function users(data) {
  data.map((user) => {
    root.innerHTML += `<div class='user-card'><h1>${user.name}</h1><p>Bank number : ${user.balance_id}</p>
    <p><img class='image' src='https://cdn-icons-png.flaticon.com/128/1611/1611179.png'>: ${user.balance}</p></div>`;
  });
}

btn.addEventListener("click", () => {
  console.log(input.value);
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => calculate(data));
});

function calculate(data) {
  root.innerHTML = "";
  let count;
  let money;
  data.map((user) => {
    money = user.balance;
    for (i = 0; i < input.value; i++) {
      if (user.balance_type) {
        count = Math.round(money * 0.1 + money);
        console.log(count)
      } else {
        count = Math.round(money * 0.01 + money);
      }
      money = count;
    }
    root.innerHTML += `<div class='user-card'><h1>${user.name}</h1><p>Bank number : ${user.balance_id}</p>
    <p><img class='image' src='https://cdn-icons-png.flaticon.com/128/1611/1611179.png'>: ${user.balance}</p>
      <p class='add'><img class='image' src='https://cdn-icons-png.flaticon.com/512/5711/5711251.png'>: ${count}</p></div>`;
  });
}
