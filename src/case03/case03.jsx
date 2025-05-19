// App.js
import { useState } from 'react';

function Product({ arr }) {
  if (arr.length)
    return arr.map((item, index) => <h2 key={index}>Item: {item}</h2>);

  return <h2>There is no product</h2>;
}

function Case03() {
  const [product, setProduct] = useState([]); // 🔴 Bug: should be false or true initially

  const toggleVisibility = () => {
    const arr = ['apple', 'orange', 'mango'];
    // setProduct(arr);

    setProduct((prev) => (prev.length ? [] : arr));
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Debugging Class</h1>
      <label>
        <input type="checkbox" onChange={toggleVisibility} />
        Show Product
      </label>{' '}
      <br />
      {Boolean(product.length) && <Product arr={product} />}
      {/* <Product arr={product} /> */}
    </div>
  );
}

export default Case03;
