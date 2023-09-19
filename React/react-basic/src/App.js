import {useState} from 'react';

function App() {
  let [count, setCount] = useState(0);
  // let [title, setTitle] = useState('리액트 너무 어려워요!');
  let [title, setTitle] = useState(["이예진1", "이예진2", "이예진3"]);
  let [bgColor, setbgColor] = useState('white');

  let changeBg = () => {
    let newBg = bgColor == 'white'? 'red' : 'white';
    setbgColor(newBg)
  }

  return (
    <div className="App" style={{backgroundColor : bgColor}}>
       <button onClick={changeBg}>배경색 변경</button>
      <div>
        <p>클릭시 + {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      {/* 
      <h4>{title}</h4>
      <button onClick={()=>{
        let copy = [...title];
        copy = "리액트 너무 재밌어요!";
        setTitle(copy)
      }}>글제목 변경</button> */}

      <h2>{title}</h2>
      <button onClick={()=>{
        let titleCopy = [...title];
        titleCopy[0] = '리액트 너무 재밌어요!';
        console.log(title == titleCopy)
        setTitle(titleCopy);
      }}>Click</button>
    </div>
  );
}

export default App;

