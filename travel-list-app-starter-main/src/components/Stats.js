import React from "react";

function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems
      ? Math.round((packedItems / totalItems) * 100)
      : 0;
  
      const message = packedPercentage === 100
        ? "You got everything!"
        : `You have ${totalItems} items. You already packed ${packedItems} (${packedPercentage}%).`;
  
  
    return (
      <footer className="stats">
        <em>
          {message}
        </em>
      </footer>
    );
  }

export default Stats;