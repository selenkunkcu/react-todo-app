import { useState, useEffect } from "react";

import Input from "./components/Input.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { task: "Learn JavaScript", completed: true },
    { task: "Learn React", completed: false },
    { task: "Have a life!", completed: false },
  ]);

  const addTodo = (task) => {
    setTodoList([...todoList, { task, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const handleCompleted = (index) => {
    const updatedTodoList = todoList.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    console.log("Updated todoList:", todoList);
  }, [todoList]);

  return (
    <section className="todoapp">
      <h1>todos</h1>
      <Input addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} todoCompleted={handleCompleted} />
    </section>
  );
}

export default App;
