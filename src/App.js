import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskProvider from './Context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Header />
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
