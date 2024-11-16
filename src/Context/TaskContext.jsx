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
    description: 'Description 1',
  }]);

  function addTask(title, description) {
    console.log(title, description);
    setTaskList((prevState) => {
      console.log('prevState :', prevState)
      const items = [...prevState];
      const newTask = {
        id: Math.random(),
        title,
        description
      }
      return [...items, newTask]
    });
  }
  const ctxValue = {
    items: taskList,
    addTask,
    deleteTask: () => {},
    updateTask: () => {},
  };

  return (
    <TaskContext.Provider value={ctxValue}>{children}</TaskContext.Provider>
  );
}
