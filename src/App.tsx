import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {TodoListHeader} from "./components/todolistHeader/TodoListHeader";
import {TasksContainer} from "./components/TasksContainer/TasksContainer";
import {todoList} from "./taskList";

function App() {
    let [taskTitle,setTaskTitle] = useState("") ;
    let [tasks,setTasks] =useState(todoList);


    const changeInputValue = (e:ChangeEvent<HTMLInputElement>) => {
       setTaskTitle(e.currentTarget.value.trim())
    }

  return (
    <div className="App">
      <TodoListHeader setTasks={setTasks} value={taskTitle} changeInputValue={changeInputValue} tasks={tasks}/>
      <TasksContainer setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
