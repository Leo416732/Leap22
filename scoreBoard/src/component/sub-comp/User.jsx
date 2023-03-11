import { useState } from "react";

export default function User(prop) {
  const [x, setX] = useState(prop.score);
  function minus() {
    setX(x - 1);
  }
  function add() {
    setX(x + 1);
  }
  return (
    <div className="prop">
      <p className="number">{prop.index}</p>
      <p className="name">{prop.name}</p>
      <div className="btnQ">
        <button className="bg-primary" onClick={minus}>
          -
        </button>
        <p>{x}</p>
        <button className="bg-primary" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
