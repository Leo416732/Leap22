import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [interVal, setInterval] = useState();
  const addTodo = () => {
    setTodos([...todos, interVal]);
  };
  const inputChange = (e) => {
    setInterval(e.target.value);
  };
  const clear = (e) => {
    setInterval([todos.splice(e.target.id, 1)]);
  };
  return (
    <div className="App container">
      <h1>Todo App</h1>
      <div className="add">
        <input
          className="input"
          placeholder="Add Todo"
          type="text"
          onChange={inputChange}
        />
        <button className="btn" onClick={addTodo}>
          Add New Task
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div className="todo">
            <div className="todo-list" id={index} key={index}>
              {todo}
            </div>
            <div>
              <input className="checkbox" type="checkbox" />
              <button className="todo-btn" onClick={clear}>
                <img
                  id={index}
                  src="https://cdn-icons-png.flaticon.com/512/9247/9247836.png"
                />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
