import React from 'react';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

function Task({ title }) {
  return (
    <li className='p-2 rounded-md bg-gray-100 flex justify-between'>
      <label htmlFor={title} className='flex gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          id={title}
          className='w-4 h-4 border-gray-300 cursor-pointer'
        />
        {title}
      </label>

      <button className='text-gray-500 rounded-md font-bold'>
        <DeleteForeverSharpIcon />
      </button>
    </li>
  );
}

export default Task;
