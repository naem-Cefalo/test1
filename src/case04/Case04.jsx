import { useState, useEffect } from 'react';

// Scenario: useEffect fetches data on every render, causing an infinite loop
function BadFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This will run after every render, causing repeated fetches
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((json) => setData(json));
  });

  return (
    <div>
      <h2>Bad Fetcher (Infinite Requests!)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Solution: Add dependency array to useEffect
function GoodFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This will only run once, after the first render
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []); // Empty dependency array

  return (
    <div>
      <h2>Good Fetcher (Single Request)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Case04() {
  return (
    <div>
      {/* <BadFetcher /> */}
      <GoodFetcher />
    </div>
  );
}
