import React, {ChangeEvent, useState} from "react";
import './TodoListHeaderStyle.css'

export function TodoListHeader() {

   let [value,setValue] = useState("") ;

  const changeInputValue = (e:ChangeEvent<HTMLInputElement>) => {
       setValue(e.currentTarget.value.trim())
    }
 const addTaskHandler = (e:React.MouseEvent<HTMLElement>) => console.log(value)
console.log("is rendered");
    return <header>
    <h1 className='header-title'> My To Do List</h1>
        <div className='header-input-block'>
            <input onChange={changeInputValue} type={"text"}/>
            <button onClick={addTaskHandler}>+</button>
        </div>


    </header>

}