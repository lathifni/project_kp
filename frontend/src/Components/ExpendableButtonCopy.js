import React from "react";

export const ExpendableButtonCopy = ({ isOpenn, togglee }) => {
  return (
    <button onClick={togglee}>
      <span
        class="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpenn ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
      >
        expand_more
      </span>
      
    </button>
  );
};