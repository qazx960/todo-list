import React from "react";
import "./headers.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className="headers">
      <ul className="filters">
        {filters.map((value, index) => (
          <li key={index}>
            <button className="filter" onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
