import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(import.meta.env.VITE_APPWRITE_URL)

  console.log(count);

  return (
    <>
      <h1>a blog with appwrite</h1>
    </>
  )
}

export default App
