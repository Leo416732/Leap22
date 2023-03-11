import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ABout from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { MENUS, users } from "./util/data";

function App() {
  const [dataa, setDataa] = useState(users);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function check(userName, password) {
    dataa.map((user) => {
      if (user.name === userName && user.password === password) {
        setIsLoggedIn(true);
      } else {
        console.log("error");
      }
    });
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<ABout />} />
        <Route path={MENUS[2].url} element={isLoggedIn ? (<Product />) : (<Login users={dataa} setDataa={setDataa} check={check} />)} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
