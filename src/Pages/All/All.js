import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './All.css'

export default function All({NewTask, onAddToDo}) {
    const [input, setInput] = useState("")

    const onInput = (e) => {
        setInput(e.target.value);
    }

    const onAddNewToDo = () =>{
        if(input.trim() !== "" ? true : false){
            onAddToDo(input, false)
        }
        setInput("")
    }

    const toDoListValid = NewTask && Array.isArray(NewTask)
    const toDoListItem = toDoListValid && NewTask.map((todo) => 
        
        <li key={todo.id}>
            <p>{todo.text}</p>
            <br/>
        </li>
    )

  return (
    <div className='main'>
        <div className='form-inline container'>
            <input placeholder='add details' type='text' value={input} className='form-control' onChange={onInput}/>
            <button type='submit' onClick={onAddNewToDo} className='btn btn-primary' disabled={input.trim() === "" ? true : false}>Add</button>
        </div>
        <ul className='List'>{toDoListItem}</ul>
    </div>
  )
}
