import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {
  const [count, setCount] = useState(0)

  useQuery({
    queryKey:["posts"],
    queryFn
  })

  return (
    <>
      
    </>
  )
}

export default App
