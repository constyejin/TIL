import './App.css'
import Box from './component/Box';

function App(props) {
  return (
    <div className="App" style={{backgroundColor : props.name}}>
      <Box/>
    </div>
  );
}

export default App;

