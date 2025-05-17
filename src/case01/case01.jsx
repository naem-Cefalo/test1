import React, { useState } from 'react';

// Use React.memo to prevent unnecessary re-renders
// const ChildA = React.memo(function ChildA() {
//   console.log('ChildA rendered');
//   return <div>Child A</div>;
// });

// const ChildB = React.memo(function ChildB() {
//   console.log('ChildB rendered');
//   return <div>Child B</div>;
// });

// ChildA will render every time Parent renders
function ChildA() {
  console.log('ChildA rendered');
  return <div>Child A</div>;
}

// ChildB will also render every time Parent renders (even if not needed)
function ChildB() {
  console.log('ChildB rendered');
  return <div>Child B</div>;
}

// show sidebar example using memo

export default function Case01() {
  const [count, setCount] = useState(0);

  // When you click the button, both ChildA and ChildB re-render
  return (
    <div>
      <h2>Unnecessary Child Rendering Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ChildA />
      <ChildB />
    </div>
  );
}
