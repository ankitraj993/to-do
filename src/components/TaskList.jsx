import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Task from './Task';

function TaskList() {
  const { items } = useContext(TaskContext);
  return (
    <ul>
      {items.map((item, i) => {
        return <Task key={i} title={item.title} description={item.description} />;
      })}
    </ul>
  );
}

export default TaskList;
