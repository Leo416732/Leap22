import "./App.css";
import { useState } from "react";

function App() {
  let [num, setNum] = useState(0);
  let [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function changeToNumber(event) {
    let input = event.target.value;
    console.log(input);
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    console.log(operatorInput);
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
  }
  function clear() {
    setNum(0);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }
  function porcentagem() {
    setNum(num / 100 + "%");
  }

  return (
    <div className="App">
      <input className="input" value={num} />
      <div className="nav">
        <button onClick={clear}>C</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentagem}>%</button>
      </div>
      <div className="number">
        <button onClick={changeToNumber} value={1}>
          1
        </button>
        <button onClick={changeToNumber} value={2}>
          2
        </button>
        <button onClick={changeToNumber} value={3}>
          3
        </button>
        <button onClick={changeToNumber} value={4}>
          4
        </button>
        <button onClick={changeToNumber} value={5}>
          5
        </button>
        <button onClick={changeToNumber} value={6}>
          6
        </button>
        <button onClick={changeToNumber} value={7}>
          7
        </button>
        <button onClick={changeToNumber} value={8}>
          8
        </button>
        <button onClick={changeToNumber} value={9}>
          9
        </button>
      </div>
      <div className="zero">
        <button className="zero-btn" onClick={changeToNumber} value={0}>
          0
        </button>
        <button className="hidden" onClick={changeToNumber}>
          k
        </button>
        <button className="zero-btn" onClick={changeToNumber} value={"."}>
          .
        </button>
      </div>
      <div className="operator">
        <button onClick={operatorHandler} value={"+"}>
          +
        </button>
        <button onClick={operatorHandler} value={"-"}>
          -
        </button>
        <button onClick={operatorHandler} value={"x"}>
          x
        </button>
        <button onClick={operatorHandler} value={"/"}>
          /
        </button>
      </div>
      <div className="calculate">
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
