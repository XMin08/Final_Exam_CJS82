import React from 'react'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Completed.css'

export default function Completed({TaskComplete, onDeleteTaskComplete, onDeleteAllTaskComplete}) {


  const toDoListValid = TaskComplete && Array.isArray(TaskComplete)
    const toDoListItem = toDoListValid && TaskComplete.map((todo) => 
        <div key={todo.id} className="mb-3 complete">
          <Form.Check
            type='checkbox'
            id={todo.id}
            label={todo.text}
            value={todo.text}
            disabled
            checked
          />
          
          <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={()=>onDeleteTaskComplete(todo.id)}/>
          
          
        </div>
  )

  return (
    <>
      <ul className='List'>
          {toDoListItem}
      </ul>
      <button type="button" className="btn btn-danger deleteComplete" onClick={onDeleteAllTaskComplete}>Delete All</button>
    </>
    
  )
}
