import { createContext, useState } from 'react';

export const TaskContext = createContext({
  items: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
});

export default function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([{
    id: Math.random(),
    title: 'Task 1',
    completed: false
  }]);

  function addTask(title) {
    setTaskList((prevState) => [
      {
        id: Math.random(),
        title,
        completed: false      
      },
      ...prevState
    ]);
  }

  function deleteTask(id) {
    setTaskList((prevState) => prevState.filter((item) => item.id !== id));
  }

  function updateTask(id) {
    setTaskList((prevState) => {
      const items = prevState.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return items;
    });
  }

  const ctxValue = {
    items: taskList,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <TaskContext.Provider value={ctxValue}>{children}</TaskContext.Provider>
  );
}
