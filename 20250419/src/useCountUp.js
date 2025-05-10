import { useState } from 'react';

export default function useCountUp() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const increment = () => {
    setCount((count) => count + 1);
  };
  
  return { count, decrement, increment };
}