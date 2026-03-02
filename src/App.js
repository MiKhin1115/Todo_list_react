import "./App.css";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { api } from "./api/apiResource";
import uuid from "react-uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const res = await api.get("/todolist");
    setTasks(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [tasks]);

  const submitTask = async (userTask) => {
    const data = {
      id: uuid(),
      tasks: userTask,
      complete: false,
    };
     await api.post("/todolist", data)
    //setTasks(...tasks, res.data)
  };

  const deleteTask = async (task_id) => {
    await api.delete(`/todolist/${task_id}`)
  }

  const updateTask = async ( task_id, complete) => {
    await api.patch(`/todolist/${task_id}`, {complete})
    
  }

  return (
    <div className="mx-auto w-50 mt-5">
      <Form submitTask={submitTask}></Form>
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}></List>
    </div>
  );
}

export default App;
