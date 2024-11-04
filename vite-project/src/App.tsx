// Styled Components
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

  button {
    border: none;
    outline: none;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  )
}

export default App
