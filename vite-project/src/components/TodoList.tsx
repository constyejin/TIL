import React from 'react';
import { useState } from 'react';

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
    <div>
      <h2>Todo List</h2>
      <input type="text" value={input} onChange={handleChange} placeholder="할 일을 입력하세요" />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <span className='item-num'>{i + 1}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList