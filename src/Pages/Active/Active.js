import React from 'react'
import Form from 'react-bootstrap/Form'
export default function Active({NewTask, onAddToDo, onCompleteTask}) {
  
  const handleChange = (e) => {
    onAddToDo(e.target.value, true)
    onCompleteTask(e.target.id)
  }

  const toDoListValid = NewTask && Array.isArray(NewTask)
    const toDoListItem = toDoListValid && NewTask.map((todo) => 
        <div key={todo.id} className="mb-3">
          <Form.Check
            type='checkbox'
            id={todo.id}
            label={todo.text}
            value={todo.text}
            onChange={handleChange.bind(this)}
          />
        </div>
    )
  
  return (
    <ul className='List'>
        {toDoListItem}
    </ul>
  )
}
