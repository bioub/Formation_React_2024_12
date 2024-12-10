import { useState } from "react";

function List() {
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems([...items, items.length]);
  }
  
  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;