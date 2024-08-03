import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [seconds, setSeconds] = useState(20);

  const handleIncrementCount2 = () => setCount2((count2) => count2 + 1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ animationDuration: `${seconds}s` }}  />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" style={{ animationDuration: `${seconds}s` }}  />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); setSeconds((seconds) => seconds - (seconds / 20))}}>
          Count is {count} <br />
          Velocity is {(60 / seconds).toFixed(1)} RPM
        </button>

        <Button onClick={handleIncrementCount2}>{count2}</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
