import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  function generateRandomNumber() {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  }

  return (
    <div>
      <h1>Random Number Generator</h1>
      <p>Click the button below to generate a random number:</p>
      <button onClick={generateRandomNumber}>Generate</button>
      <p>The random number is: {randomNumber}</p>
    </div>
  );
}

export default App;
