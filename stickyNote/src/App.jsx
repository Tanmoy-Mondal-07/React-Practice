import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import AddNote from './components/AddNote'

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
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 999,
        }}
      >
        <AddNote />
      </div>
      <Notes notes={notes} setnotes={setnotes} />
    </div>
  )
}

export default App
