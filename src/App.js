import './App.css';
import AddTaskForm from './components/AddTaskForm.tsx';
import Tasks from './components/Tasks.tsx';

const App = () => {
  return (
    <main className="center">
      <div className='container'>
        <div className="heading">
          <h1 className='title'>To-do list</h1>
        </div>
        <div className="box">
          <Tasks />
          <AddTaskForm />
        </div>
        <footer>
          &copy; hak_raj 2023
        </footer>
      </div>
    </main>
  );
};

export default App;
