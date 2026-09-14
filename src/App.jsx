import { useRef, useState } from "react";
import "./App.css"
import Form from "./components/Form"
import Todolist from "./components/Todolist"

function App() {
  const newTask = useRef('');
  const [tasks, setTasks] = useState([]);
  function addTask(event) {
    event.preventDefault();
    if(!newTask.current.value){
      alert('Silahkan masukan data');
      return false;
    }

    const setId = () => {
      const jumlah = tasks.length;
      return jumlah + 1;
    }

    const data = {
      id: setId(),
      task : newTask.current.value,
      completed : false,
    }

    newTask.current.value = '';
    setTasks([...tasks, data]);
  }

  function setCompleted(id) {
    let taskItem = [];
    tasks.map((item, index) => {
      if(item.id == id) {
        taskItem[index] = {...item, completed: !item.completed}
      }else{
        taskItem[index] = item;
      }
    });
    setTasks(taskItem)
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask}/>
      <Todolist tasks={tasks} setCompleted={setCompleted}/>
    </>
  )
}

export default App