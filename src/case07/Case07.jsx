import { useState } from 'react';

// Child component expects a number, but receives a string
function AgeDisplay({ age }) {
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
  return (
    <div>
      <h2>Props Misuse Example</h2>

      <label htmlFor="age">what is your current age</label>
      <br />

      <input
        type="number"
        name="age"
        id=""
        onChange={(e) => setAge(e.target.value)}
      />
      <AgeDisplay age={age} />
      {/* Correct usage: <AgeDisplay age={18} /> */}
      <p>
        <strong>Can you spot the bug?</strong> <br />
        Try changing <code>age="18"</code> to <code>age=&#123;18&#125;</code> in
        the code!
      </p>
    </div>
  );
}
