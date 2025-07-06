import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setnotes] = useState([
    {
      id: 1,
      text: "Check the description for my Frontent Prep"
    },
    {
      id: 2,
      text: "Star the repo"
    }
  ])
  return (
    <div>
      <Notes notes={notes} setnotes={setnotes}/>
    </div>
  )
}

export default App
