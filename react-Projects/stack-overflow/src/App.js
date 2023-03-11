import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const USERS = [
  {
    first: "Sylvan",
    last: "Osinski",
    email: "redsquirrel44@gmail.com",
    address: "227 Hyatt Mountains",
    created: "May 17, 2017",
    balance: "$832.23",
  },
  {
    first: "Sincere",
    last: "Beatty",
    email: "Sincere.Beatty@ayden.info",
    address: "32590 Anderson Parks",
    created: "September 5, 2016",
    balance: "$7,028.84",
  },
  {
    first: "Geoffrey",
    last: "VonRueden",
    email: "Geoffrey.VonRueden@savannah.name",
    address: "90298 Welch Grove",
    created: "December 11, 2015",
    balance: "$4,088.59",
  },
  {
    first: "Ollie",
    last: "Wolf",
    email: "pinkwolf63@gmail.com",
    address: "217 Mckayla Wall",
    created: "July 10, 2019",
    balance: "$2,661.98",
  },
  {
    first: "Lavon",
    last: "Zieme",
    email: "tangiraffe47@gmail.com",
    address: "67992 Everardo Fields",
    created: "July 2, 2020",
    balance: "$6,930.30",
  },
  {
    first: "Maximo",
    last: "Wilderman",
    email: "tealsquirrel35@gmail.com",
    address: "2944 Rosalee Roads",
    created: "August 5, 2020",
    balance: "$3,657.05",
  },
  {
    first: "Layne",
    last: "Dietrich",
    email: "Layne.Dietrich@gabriella.net",
    address: "8996 Lucy Plains",
    created: "July 23, 2020",
    balance: "$6,888.81",
  },
  {
    first: "Karli",
    last: "Ebert",
    email: "Karli.Ebert@rozella.info",
    address: "033 Trystan Motorway",
    created: "September 14, 2020",
    balance: "$7,507.48",
  },
];

// USERS хувьсагч дотор байгаа дата-г ашиглан хэрэглэгч тус бүрийн card "component" үүсгэн хэвлэж гаргана уу.

function App() {
  console.log(USERS);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
