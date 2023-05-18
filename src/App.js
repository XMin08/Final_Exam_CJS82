import './App.css';
import {Routes, Route} from 'react-router-dom'
import All from './Pages/All/All';
import Active from './Pages/Active/Active';
import Completed from './Pages/Completed/Completed';
import Header from './Common/Header/Header';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
function App() {

  const [TaskComplete, setTaskComplete] = useState([])
  const [NewTask, setNewTask] = useState([])

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("Newtodos");
    if (todoFromLocal) {
      setNewTask(JSON.parse(todoFromLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Newtodos", JSON.stringify(NewTask));
  }, [NewTask]);

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("Completetodos");
    if (todoFromLocal) {
      setTaskComplete(JSON.parse(todoFromLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Completetodos", JSON.stringify(TaskComplete));
  }, [TaskComplete]);

  const onAddToDo = (text, check) =>{
    const newToDo = {
      id : v4(),
      text : text,
      isDone: check,
    };
    
    if(check){
      setTaskComplete((prevList) => [newToDo, ...prevList])
    }
    else{
      setNewTask((prevList) => [newToDo, ...prevList])
    }
    
  }

  const onCompleteTask = (id) => {
    const newToDo = NewTask.filter((item) => item.id !== id)
    setNewTask(newToDo)
  }

  const onDeleteTaskComplete = (id) => {
    const newToDo = TaskComplete.filter((item) => item.id !== id)
    setTaskComplete(newToDo)
  }

  const onDeleteAllTaskComplete = () => {
    setTaskComplete([])
  }
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<All 
                NewTask={NewTask}
                onAddToDo={onAddToDo} />} />
        <Route path='/Active' element={<Active
                NewTask={NewTask}
                onAddToDo={onAddToDo}
                onCompleteTask={onCompleteTask}/>}/>
        <Route path='/Completed' element={<Completed 
                TaskComplete={TaskComplete} 
                onDeleteTaskComplete={onDeleteTaskComplete}
                onDeleteAllTaskComplete={onDeleteAllTaskComplete}/>}/>
      </Routes>
    </div>
  );
}

export default App;
