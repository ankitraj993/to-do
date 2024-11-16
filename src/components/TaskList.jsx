import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Task from './Task';

function TaskList() {
  const { items } = useContext(TaskContext);
  return (
    <>
      <ul className='flex flex-col gap-4 py-4'>
        {items.map((item) => {
          return <Task key={item.id} item={item} />;
        })}
      </ul>

      <p className='text-center'>
        {items.filter((item) => item.completed).length} of {items.length} tasks
        completed
      </p>
    </>
  );
}

export default TaskList;
