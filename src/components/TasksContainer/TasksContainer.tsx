import React, {ChangeEvent, useState} from "react";
import './TasksContainerStyle.css'
import {TasksType, todoList} from "../../taskList";
import {Task} from "./Task/Task";

export type TasksContainerPropsType = {
    tasks:TasksType
    setTasks:(filteredTask:TasksType) => void
}
export function TasksContainer(props:TasksContainerPropsType) {

    let tasksJSX = props.tasks.map((t) => {
        return <Task setTasks={props.setTasks} deletedTaskID={t.id!} tasks={props.tasks} title={t.title}/>
    });

    return <div className='tasks-container'>
        {tasksJSX}


    </div>

}