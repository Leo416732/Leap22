document.getElementsByClassName("root2")[0].innerHTML = "hello2";
document.getElementsByTagName("body").innerText = "asc";
document.getElementsByClassName("root2")[0].innerHTML =
  "<div class='darkmode'><h2>Hello dark mode</h2><p>hi im dark mode</p><h5>Im dark</h5><h4>Im</h4></div>";
document.getElementsByTagName("img")[0].src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vD36qJsInLtK1kHtazl8T3Z8UX5tnCN7YW8gbEt2HA&s";
document.getElementsByTagName("img")[0].width = 500;

const newDiv = document.createElement("h1");
const newContent = document.createTextNode("MAnai site d tawtai moril");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);
