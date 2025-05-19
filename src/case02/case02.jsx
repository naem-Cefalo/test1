import React, { useState } from 'react';

// ChildA: Has its own state and a button to update it
function ChildA() {
  const [count, setCount] = useState(0);
  console.log('ChildA rendered');
  return (
    <div style={{ border: '1px solid blue', padding: 10, margin: 10 }}>
      <h3>Child A</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment A</button>
      <button onClick={() => setCount(count - 1)}>Decrement A</button>
    </div>
  );
}

// ChildB: Has its own state and a button to update it
function ChildB() {
  const [value, setValue] = useState(0);
  console.log('ChildB rendered');
  return (
    <div style={{ border: '1px solid green', padding: 10, margin: 10 }}>
      <h3>Child B</h3>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment B</button>
      <button onClick={() => setValue(value - 1)}>Decrement B</button>
    </div>
  );
}

// Parent: Renders both children
export default function Case02() {
  return (
    <div>
      <h2>Component Re-render Demo</h2>
      <ChildA />
      <ChildB />
      <p>
        Open the console to see which component re-renders when you click the
        buttons.
      </p>
    </div>
  );
}

// ChildA and ChildB: Both have independent states, but they re-render when either is updated

// function ChildA({ countA, setCountA }) {
//   console.log('ChildA rendered');
//   return (
//     <div style={{ border: '1px solid blue', padding: 10, margin: 10 }}>
//       <h3>Child A</h3>
//       <p>Count A: {countA}</p>
//       <button onClick={() => setCountA(countA + 1)}>Increment A</button>
//       <button onClick={() => setCountA(countA - 1)}>Decrement A</button>
//     </div>
//   );
// }

// function ChildB({ countB, setCountB }) {
//   console.log('ChildB rendered');
//   return (
//     <div style={{ border: '1px solid green', padding: 10, margin: 10 }}>
//       <h3>Child B</h3>
//       <p>Count B: {countB}</p>
//       <button onClick={() => setCountB(countB + 1)}>Increment B</button>
//       <button onClick={() => setCountB(countB - 1)}>Decrement B</button>
//     </div>
//   );
// }

// export default function Case02() {
//   const [countA, setCountA] = useState(0);
//   const [countB, setCountB] = useState(0);

//   return (
//     <div>
//       <h2>Independent State, But Both Children Re-render</h2>
//       <ChildA countA={countA} setCountA={setCountA} />
//       <ChildB countB={countB} setCountB={setCountB} />
//       <p>
//         Open the console. Changing A or B will re-render both children, even
//         though their states are independent.
//       </p>
//     </div>
//   );
// }
