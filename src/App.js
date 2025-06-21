import React from 'react';
import './App.css';
import useCountUp from './useCountUp';

function App() {
  const { count, decrement, increment } = useCountUp();

  return (
    <div className="App">
      <header className="App-header">
        習慣
      </header>

      <p class="title">エクササイズ</p>
      
      <div className="counter">
        <button onClick={decrement}>－</button>
        <input type="text" value={count} />
        <button onClick={increment}>＋</button>
      </div>
    </div>
  );
}

export default App;