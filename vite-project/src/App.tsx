// Styled Components
import './App.css';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Components
import Hello from './components/Hello';
import Counter from './components/Counter';
import TodoList from './components/TodoList';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    color: #fff;
    background-color: #333;
  }

  * {
    font-family: Arial, sans-serif;
    padding: 0;
    margin: 0;
  }

  input,
  button {
    border: none;
    outline: none;
  }

  li {
    list-style: none;
  }

  .btn {
    min-width: 80px;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    border-radius: 24px;
    transition: filter 300ms ease-in-out;
  }

  .btn-40 {
    height: 40px;
  }

  .btn-50 {
    height: 50px;
  }
`;


function App() {
  return (
    <div className='wrapper'>
      <GlobalStyle />
      <TodoList />
    </div>
  )
}

export default App
