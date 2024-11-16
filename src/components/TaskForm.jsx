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
    <form onSubmit={handleSubmit}>
      <input type='text' ref={titleValue} placeholder='Title' />
      <textarea
        type='text'
        ref={descriptionValue}
        placeholder='Description'
      ></textarea>
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default TaskForm;
