import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './context/TodoContext'

function App() {
  const [ak, setak] = useState("jdjtdj")

  return (
    <Todoprovider>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Todoprovider>
  )
}

export default App
