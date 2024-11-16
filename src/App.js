import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskProvider from './Context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className='container mx-auto w-3/4 md:w-1/2 border-gray-300 p-4 rounded-md border-2 mt-10'>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
