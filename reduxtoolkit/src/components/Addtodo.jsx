import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../feachers/todo/todoSlice'

function Addtodo() {

const [input,setInput] = useState('')
const dispatch = useDispatch()

const addtodohandler=(e)=>{
    e.preventDefault
    dispatch(
addtodo(input)
    )
    setInput('')
}

  return (
    <div>
      <form onSubmit={addtodohandler}>
        <input type="text" placeholder='enter a todo....' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Addtodo
