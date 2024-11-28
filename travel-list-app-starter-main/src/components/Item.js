import React from "react";

function Item({ item, togglePacked, handleDeleteItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => togglePacked(item.id)}
        />
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity}x {item.description}
        </span>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
    );
  }

  export default Item;