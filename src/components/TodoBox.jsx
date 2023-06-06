import React, { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";
import "./TodoBox.css";

const TodoBox = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: "123", text: "리액트 공부하기", status: "incomplete" },
    { id: 124, text: "Leetcode", status: "incomplete" },
  ]);

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className="container">
      <ul className="list">
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoBox;

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
