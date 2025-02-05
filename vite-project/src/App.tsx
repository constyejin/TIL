import './Main.css';

import TodoList from './components/TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='wrapper'>
      <TodoList />
      <FontAwesomeIcon icon={faGear} />
    </div>
  )
}

export default App
