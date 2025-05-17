import React, { useMemo, useState } from 'react';

// Expensive calculation function
function expensiveCalculation(num) {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num * Math.random();
  }
  return result;
}

export default function Case08() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // useMemo caches the result unless 'number' changes
  // const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);
  const calculatedValue = expensiveCalculation(number);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Number: {number}</p>
      <p>Expensive Calculation Result: {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render (count: {count})
      </button>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
}
