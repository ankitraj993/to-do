import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Task from './Task';

function TaskList() {
  const { items } = useContext(TaskContext);
  return (
    <ul className='flex flex-col gap-4 py-4'>
      {items.map((item, i) => {
        return <Task key={i} title={item.title} description={item.description} />;
      })}
    </ul>
  );
}

export default TaskList;
