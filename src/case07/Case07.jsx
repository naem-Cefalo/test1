import { useState } from 'react';

// Child component expects a number, but receives a string
function AgeDisplay({ age }) {
  // console.log('child', age + 10); // This will log the age as a string
  console.log('child', typeof age); // This will log the age as a string
  console.log('hello' + 22);

  // This will cause a bug: "18" + 2 = "182" (string concatenation)
  return (
    <div>
      <p>Your age in 10 years: {age ? age + 10 : ''}</p>
    </div>
  );
}

export default function Case07() {
  const [age, setAge] = useState(0);
  // Mistakenly passing age as a string instead of a number
  console.log('Parent:', age); // This will log the age as a string

  return (
    <div>
      <h2>Props Misuse Example</h2>

      <label htmlFor="age">what is your current age</label>
      <br />

      <input
        type="number"
        name="age"
        id=""
        onChange={(e) => setAge(Number(e.target.value))} // Correctly converting to number
      />
      <AgeDisplay age={age} />

      {/* <p>
        <strong>Can you spot the bug?</strong> <br />
        Try changing <code>age="18"</code> to <code>age=&#123;18&#125;</code> in
        the code!
      </p> */}
    </div>
  );
}
