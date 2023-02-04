import React, {ChangeEvent, useState} from "react";
import './TodoListHeaderStyle.css'
import {TasksType} from "../../taskList";
import {v1} from 'uuid'

export type TodoListHeaderPropsType = {
    value: string;
    tasks: TasksType;
    changeInputValue:(e:ChangeEvent<HTMLInputElement>)=> void;
    setTasks:(newTask:TasksType)=>void
}
export function TodoListHeader(props: TodoListHeaderPropsType) {

 const addTaskHandler = (e:React.MouseEvent<HTMLElement>) => {
     let newTask = {id:v1(), title: props.value, isDone: false}
     props.setTasks( [...props.tasks,newTask])
 }


    return <header>
    <h1 className='header-title'> My To Do List</h1>
        <div className='header-input-block'>
            <input className='header-input' onChange={props.changeInputValue} type={"text"}/>
            <button className='header-button--add' onClick={addTaskHandler}>+</button>

        </div>
        <button className='header-button--add' onClick={()=>console.log("info")}>info</button>

    </header>

}