import React from "react";
import Item from "./Item";

function PackingList({ items, togglePacked, handleDeleteItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} togglePacked={togglePacked} handleDeleteItem={handleDeleteItem}/>
          ))}
        </ul>
      </div>
    );
  }

export default PackingList;