import { useState } from "react";
import "./App.css";
import Profile from "./component/Profile";
import WelcomePage from "./component/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataa, setDataa] = useState(data);

  console.log(dataa);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username :", userName);
    console.log("password :", password);

    dataa.map((user) => {
      if (user.name === userName && user.password === password) {
        setIsLoggedIn(true);
      } else {
        console.error("Wrong password or username");
      }
    });
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WelcomePage setLogin={loginHandler} data={data} setDataa={setDataa} />
      )}
    </div>
  );
}

export default App;

const data = [
  {
    name: "boldo",
    password: "qwe",
  },
  {
    name: "bata",
    password: "qwe",
  },
  {
    name: "leo",
    password: "qwe",
  },
];
