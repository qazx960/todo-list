import React from "react";
import { BsXSquare } from "react-icons/bs";

const todoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "30%",
  margin: "auto",
};

const Todo = () => {
  return (
    <div style={todoContainer}>
      <h2>Hello</h2>
      <input type="checkbox" name="" id="" />

      <BsXSquare />
    </div>
  );
};

export default Todo;
