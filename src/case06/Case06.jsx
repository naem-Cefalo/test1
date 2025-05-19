import React, { useState } from 'react';

function Case06() {
  const [count, setCount] = useState(0);
  // let count = 0;

  const increment = () => {
    setCount(count + 1);
  };

  // You cannot see the updated value in the <p> tag because count is a regular variable, not a React state variable. React does not track changes to normal variables, so updating count does not trigger a re-render. The component only re-renders when state changes (using useState).

  return (
    <>
      <h2>Case 06: No State Management</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Case06;
