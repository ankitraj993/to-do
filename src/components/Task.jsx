import React, { useContext } from 'react';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { TaskContext } from '../Context/TaskContext';

function Task({ item }) {
  const { deleteTask, updateTask } = useContext(TaskContext);
  return (
    <li className='p-2 rounded-md bg-gray-100 flex justify-between'>
      <label
        htmlFor={item.title}
        className='flex gap-2 items-center cursor-pointer'
      >
        <input
          type='checkbox'
          id={item.title}
          className='w-4 h-4 border-gray-300 cursor-pointer'
          onChange={() => updateTask(item.id)}
          checked={item.completed}
        />
        {item.title}
      </label>

      <button
        className='text-gray-500 rounded-md font-bold'
        onClick={() => deleteTask(item.id)}
      >
        <DeleteForeverSharpIcon />
      </button>
    </li>
  );
}

export default Task;
