import React, { useState } from "react";
import "../component/todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = ()=>{
    
  }

  return (
    <div className="container">
      <input
        type="text "
        placeholder="New todos...."
        value={input}
        onChange={inputHandler}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Todo;
