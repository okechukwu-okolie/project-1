import React, { useState } from "react";
// import "../component/todo.css";
import { BiTrash } from "react-icons/bi";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (text)=>{
    if(text.trim() == ''){
        return alert('put in a todo activity')
    }

    const todoInputs ={
        text,
        id: new Date().getTime()
    }
    const newTodoArray = [...todos,todoInputs]
    console.log(newTodoArray)
    setTodos(newTodoArray)
    setInput('')
  }

  const removeTodo=(id)=>{
    const removedItem = todos.filter((todo)=>todo.id !== id)
    setTodos(removedItem)
  }

  return (
    <div className="container">
      <input
        type="text "
        placeholder="New todos...."
        value={input}
        onChange={inputHandler}
      />

      <button onClick={()=>handleSubmit(input)}>Submit</button>

      <ul className="todos-list">
        {todos.map((todo)=><li className="todo" key={todo.id}>
            <span>{todo.text}</span>
            <button className="close" onClick={()=>removeTodo(todo.id)}><BiTrash/></button>
        </li>)}
      </ul>
    </div>
  );
};

export default Todo;
