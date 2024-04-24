import { useState } from "react";
import "./index.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.todo.value === "") return;
    setTodos([
      ...todos,
      {
        text: e.target.todo.value,
        completed: false,
        id: Math.floor(Math.random() * 1000000),
      },
    ]);
    e.target.todo.value = "";
  }

  function handleCheckBox(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return t;
      })
    );
  }

  const sortedTodos = todos.sort(
    (a, b) => a.completed - b.completed
  );

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          name="todo"
          autoFocus
        />
        <button type="submit">Add</button>
      </form>
      <div className="todos">
        {sortedTodos.map((todo) => (
          <div className="todo" key={todo.id}>
            <p className={todo.completed ? "strike" : ""}>
              {todo.text}
            </p>
            <input
              type="checkbox"
              onChange={() => handleCheckBox(todo)}
              id={todo.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
