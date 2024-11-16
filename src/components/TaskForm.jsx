import React, { useContext, useRef } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const titleValue = useRef();
  const descriptionValue = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (titleValue.current.value === '') {
      return;
    }
    addTask(titleValue.current.value, descriptionValue.current.value);
    titleValue.current.value = '';
    descriptionValue.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 flex-col'>
      <input
        type='text'
        ref={titleValue}
        placeholder='Title'
        className='border-2 p-2 rounded-md'
      />
      <textarea
        type='text'
        ref={descriptionValue}
        placeholder='Description'
        className='border-2 p-2 rounded-md'
      ></textarea>
      <button type='submit' className='bg-black text-white p-2 rounded-md'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
