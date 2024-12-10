import { useState } from "react";

function Counter() {
  console.log('Counter');
  const [count, setCount] = useState(100);

  // const tab = useState(0);
  // const count = tab[0];
  // const setCount = tab[1];

  function handleClick() {
    setCount((c) => c + 1);
  }
  return <button onClick={handleClick}>{count}</button>
}

export default Counter;
