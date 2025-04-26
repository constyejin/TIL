import React from 'react';


type HelloProps = {
  name: string;
  // age? : 선택적(optional) 프로퍼티
  age?: number; 
}

const Hello: React.FC<HelloProps> = ({name, age}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  )
}

export default Hello;