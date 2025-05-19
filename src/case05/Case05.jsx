import React, { useState, useEffect } from 'react';

export default function Case05() {
  const [userId, setUserId] = useState(1);
  const [bgColor, setBgColor] = useState('#000');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate async fetch
    const timeout = setTimeout(() => {
      console.log('Fetching user data for userId:', userId);
      setUser({ id: userId, name: `User ${userId}` });
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [userId]); // Only depend on userId

  // Function to change background color randomly
  function changeBgColor() {
    const randomColor = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
    setBgColor(randomColor);
  }

  return (
    <div
      style={{
        background: bgColor,
        padding: 20,
        borderRadius: 8,
        color: '#fff',
      }}>
      <h2>User Info</h2>
      <p>
        <button onClick={() => setUserId((id) => id + 1)}>Next User</button>
      </p>
      <p>
        <button onClick={changeBgColor}>Change Background Color</button>
      </p>
      <div>
        <strong>User ID:</strong> {userId}
      </div>
      <div>
        <strong>User Name:</strong>{' '}
        {loading ? <span>Loading...</span> : user?.name}
      </div>
    </div>
  );
}
