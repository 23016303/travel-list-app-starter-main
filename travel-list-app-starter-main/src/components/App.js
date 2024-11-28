import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortCriterion, setSortCriterion] = useState('inputOrder');

  function handleAddItem(newItem) {
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // function handleUpdateItem(updatedItem) {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === updatedItem.id ? updatedItem : item
  //     )
  //   );
  // }

  function clearAllItems() {
    setItems([]);
  }

  function togglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleSortChange(e) {
    setSortCriterion(e.target.value);
  }

  function sortItems(items) {
    switch (sortCriterion) {
      case 'description':
        return [...items].sort((a, b) => a.description.localeCompare(b.description));
      case 'packedStatus':
        return [...items].sort((a, b) => a.packed - b.packed);
      case 'inputOrder':
      default:
        return items;
    }
  }

  function toggleAllPacked() {
    const allPacked = items.every((item) => item.packed); 
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: !allPacked })) 
    );
  }
  

  const sortedItems = sortItems(items);

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <div className="controls">
        <div className="sort-items">
          <h3>Sort Items By:</h3>
          <select value={sortCriterion} onChange={handleSortChange}>
            <option value="inputOrder">Input Order</option>
            <option value="description">Alphabetical Order</option>
            <option value="packedStatus">Packed Status</option>
          </select>
        </div>
        <button onClick={toggleAllPacked} className="toggle-all">
          {items.every((item) => item.packed) ? "Unpack All" : "Pack All"}
        </button>
      </div>
      <PackingList items={sortedItems} togglePacked={togglePacked} handleDeleteItem={handleDeleteItem} />
      <button onClick={clearAllItems} className="clear-all">Clear All</button>
      <Stats items={items} />
    </div>
  );
}

export default App;
