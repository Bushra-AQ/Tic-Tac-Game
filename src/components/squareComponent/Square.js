import React from "react";
import "./Square.css";
const Square = ({ value, onSquareClick }) => {
  return (
    <div>
     
      <button
        className={`square ${value === "X" ? "square-x" : "square-o"}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
