import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const commonHeight = css`
  height: 44px;
  padding: 0 20px;
  border-radius: 24px;
`;

const Input = styled.input`
  ${commonHeight}
  margin-right: 4px;
`

const AddButton = styled.button`
  ${commonHeight}
`


const TodoList: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === '') return;
    setList([...list, input]);
    setInput('');
  };

  return (
    <div className='content-wrap'>
      <h2>Todo List</h2>

      <div className='input-wrap'>
        <Input type="text" value={input} onChange={handleChange} placeholder="Enter your Task" />
        <AddButton onClick={handleAdd}>Add</AddButton>
      </div>

      <div className='todo-table'>
        <div className='table-header'>
          <p className='no'>No</p>
          <p className='content'>List</p>
        </div>

        <div className='table-list'>
          {list.map((item, i) => (
            <div className='table-item' key={i}>
              <p className='no'>{i + 1}</p>
              <p className='content'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList