import './App.css';
import List from './components/List';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Form from "./components/Form"
import { useEffect, useState } from 'react';
import { api } from './api/apiResource';
import { logDOM } from '@testing-library/dom';

function App() {

  const [tasks, setTasks] = useState([])
  const fetchData = async() => {
    const res = await api.get('/todolist');
    setTasks(res.data);
    console.log(tasks);
    
  };
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='mx-auto w-50 mt-5'>
      <Form>

      </Form>
      <List tasks={tasks}>
         
      </List>
    </div>
  );
}

export default App;
