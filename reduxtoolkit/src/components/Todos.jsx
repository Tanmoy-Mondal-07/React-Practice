import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removetodo} from '../feachers/todo/todoSlice'

function Todos() {
  const todos=useSelector(state => state.todos)
  const dispatch=useDispatch()
  return (
    <div>
      <div>todos</div>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button
          onClick={()=>dispatch(removetodo(todo.id))}>X</button>
        </li>
        ))}
    </div>
  )
}

export default Todos
