import { useEffect, useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import AddNote from './components/AddNote'

function App() {
  const [updateTime, setupdateTime] = useState()
  const [notes, setnotes] = useState([])

  useEffect(() => {
    setnotes(JSON.parse(localStorage.getItem("notes")))
  }, [updateTime])

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
        <AddNote updateed={[updateTime, setupdateTime]} />
      </div>
      <Notes updateed={[updateTime, setupdateTime]} notes={notes} setnotes={setnotes} />
    </div>
  )
}

export default App
