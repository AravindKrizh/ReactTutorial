import React, { useState } from 'react'

export default function Home() {
     const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(false);
  };
  return (
    <div>
        <h1>Home</h1>
        {hide && (
        <button onClick={handleHide}>
          logout
        </button>
      )}
    </div>
  )
}
