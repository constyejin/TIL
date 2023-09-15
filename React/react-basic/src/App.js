import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  let [title, setTitle] = useState('리액트 너무 어려워요!')

  let change = 'fkfkfk';

  return (
    <div className="App">
      <div>
        <p>클릭시 + {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <h4>{title}</h4>
      <button onClick={()=>{
        let copy = [...title];
        copy = "리액트 너무 재밌어요!";
        setTitle(copy)
      }}>글제목 변경</button>
    </div>
  );
}

export default App;
