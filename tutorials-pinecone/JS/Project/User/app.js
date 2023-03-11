const rootELement = document.querySelector("#root");

function Profiles(user) {
  console.log(user);
  console.log(user.name.title);
  const html = `<div class='card'>
  <div class='header'>
  <img class='image' src='${user.picture.large}'>
    <h1 class='name'>${user.name.first} ${user.name.last}</h1>
    <p class='email'>${user.email}</p>
    <p class='phone'>+${user.phone}</p>
  </div>
    <div class='footer'>
    <p class='loc'>Location: ${user.location.state}, ${user.location.country}</p>
    <p class='loc'>Timezone: ${user.location.timezone.offset}</p>
    </div>
    </div>`;
  rootELement.innerHTML += html;
}

fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data) => Profiles(data.results[0]));
