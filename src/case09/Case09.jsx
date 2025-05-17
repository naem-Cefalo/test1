import React, { useState, useCallback } from 'react';

// Child component that only re-renders if its props change
const Button = React.memo(({ onClick, children }) => {
  console.log('Button rendered:', children);
  return <button onClick={onClick}>{children}</button>;
});

export default function Case09() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback, this function would be recreated on every render,
  // causing <Button> to re-render even if 'count' didn't change.
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <p>Other: {other}</p>
      <button onClick={() => setOther((o) => o + 1)}>Change Other</button>
    </div>
  );
}

/*
When to use useCallback:
- When passing a function as a prop to a memoized child component (like React.memo)
- To prevent unnecessary re-renders of child components that depend on function props
- Not needed for every function; only use when you see performance issues due to re-renders
*/
