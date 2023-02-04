import React, {ChangeEvent, useState} from "react";
import './TaskStyle.css'
import {TasksType} from "../../../taskList";

//todo сделать isDone - когда нажимаешь на таску любое поле должен присваивать новый класс className={`task` ${}}
export type TaskPropsType = {
    title:string
    deletedTaskID:string
    tasks: TasksType
    setTasks:(filteredTask:TasksType) => void
}


export function Task(props:TaskPropsType) {

    const deleteTask = (deletedTaskID:string) => {
            let filteredTask = props.tasks.filter((t) => {
            return (t.id !== deletedTaskID)
        })
        props.setTasks(filteredTask)
    }

    const onDeleteHandler = (e:React.MouseEvent<HTMLElement>) => {
        deleteTask(props.deletedTaskID)
    }

    return (
        <div className='task-container'>
            <div className={`task`}  >{props.title}</div>
            <button onClick={onDeleteHandler} className='task__button'>X</button>
        </div>
    )
}