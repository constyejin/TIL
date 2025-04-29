import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAdd();
    }
  };

  const handleDelete = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };
  

  return (
    <div className='content-wrap'>
      <h2>Todo List</h2>

      <div className='input-wrap'>
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
          placeholder="Enter your Task" 
        />
        <button className='btn btn-50' onClick={handleAdd}>Add</button>
      </div>

      <div className='todo-table'>
        <div className='table-header'>
          <p className='no'>No</p>
          <p className='content'>List</p>
        </div>

        <div className='table-list'>
          {list.map((item, i) => (
            <div className='table-item' key={i}>
              <div>
                <p className='no'>{i + 1}</p>
                <p className='content'>{item}</p>
              </div>
              <button className='btn delete-btn btn-40' onClick={() => handleDelete(i)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList
