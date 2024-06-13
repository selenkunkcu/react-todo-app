import { useState } from "react";

function Input({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return false;
    }
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="new_todo" value={inputValue} onChange={handleChangeInput} className="new-todo" placeholder="What needs to be done?" />
      </form>
    </>
  );
}

export default Input;
