function TodoList({ todoList, deleteTodo, todoCompleted }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todoList.map((todo, i) => (
          <li key={i} className={todo.completed ? "completed" : undefined}>
            <div className="todo">
              <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => todoCompleted(i)} />
              <label>{todo.task}</label>
              <button className="destroy" onClick={() => deleteTodo(i)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
