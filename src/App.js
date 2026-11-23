import React, { useState } from 'react';
import Series from './Series';
import './App.css';

function App() {
  const [n, setN] = useState(0);

  return (
    <div className="App" style={{ marginTop: '30px' }}>
      <h2>Sum of Squares Series</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <Series value={n} />
    </div>
  );
}

export default App;
