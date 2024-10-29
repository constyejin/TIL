import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Hello name={'User'} age={123}/>
      <Counter/>
    </>
  )
}

export default App
