import './App.css'
// import Box from './component/Box';
// import Map from './component/Map';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Cards from './component/Main/Cards';
// import Comment from './component/Comment';
import CommentList from './component/CommentList';

function App() {
  return (
    <div className="App">
      <CommentList/>
      {/* <Map/> */}
      {/* <Header/>
      <Main/>
      <Cards/> */}
    </div>
  );
}

export default App;

