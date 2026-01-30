import React from 'react';

function Counter({ count, increment, decrement, reset }) {
  return (
    <div className="counter-section">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;