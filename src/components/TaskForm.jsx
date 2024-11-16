import React, { useContext, useRef } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const titleValue = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (titleValue.current.value === '') {
      return;
    }
    addTask(titleValue.current.value);
    titleValue.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4'>
      <input
        type='text'
        ref={titleValue}
        placeholder='Title'
        className='border-2 p-2 rounded-md w-full'
      />
      <button type='submit' className='bg-black text-white px-4 py-2 rounded-md'>
        Add
      </button>
    </form>
  );
}

export default TaskForm;
