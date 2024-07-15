import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date('7-15-2024');
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={e => setStep(Number(e.target.value))}
      />
      <br></br>
      <button onClick={() => setCount(count - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={e => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>+</button>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) && (
        <button onSubmit={handleReset}>Reset</button>
      )}
    </>
  );
}
