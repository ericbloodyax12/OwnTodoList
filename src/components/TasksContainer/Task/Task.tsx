import React, {ChangeEvent, useState} from "react";
import './TasksContainerStyle.css'
import {todoList} from "../../taskList";

export function TasksContainer() {
    let [tasks, setTasks] = useState(todoList);
    let tasksJSX = tasks.map((t) => {
        return <h1 className='tasks-container__task'>{t.title}</h1>
    });

    return <div className='tasks-container'>
        {tasksJSX}
    </div>

}