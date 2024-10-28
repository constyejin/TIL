import React from 'react';
import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  // event handler 타입 선언
  const clickAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  const clickMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={clickAdd}>+1</button>
      <button onClick={clickMinus}>-1</button>
    </div>
  )
}

export default Counter