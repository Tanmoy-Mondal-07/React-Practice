import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './context/TodoContext'

function App() {
  const [todos, settodos] = useState([])

  const addtodo =(todo)=>{
    settodos((pr)=>[...pr, {id:Date.now(), ...todo}])
  }

  const updatedtodo=(id, todo)=>{
settodos((pr)=> pr.map((pt)=>(pt.id===id ? todo : pt)))
  }

  const deletetodo=(id)=>{
settodos((pr)=> pr.filter((todo)=>todo.id !== id))
  }

const togglecomplete=(id)=>{
  
}

  return (
    <Todoprovider value={{todos, addtodo, updatedtodo, deletetodo,togglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
