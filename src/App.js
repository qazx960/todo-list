import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoBox from "./components/TodoBox";
import "./index.css";

const filters = ["all", "incomplete", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoBox filter={filter} />
    </>
  );
}

export default App;
