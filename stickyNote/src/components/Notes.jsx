import React, { useEffect } from 'react'
import Note from './Note'

function Notes({ notes = [], setnotes = () => { } }) {

    useEffect(() => {
        const savedNotes = [];

        const updated = notes.map((note) => {
            const savedNote = null
            if (savedNote) {
                return {}
            } else {
                const position = determineNewPosition()
                return { ...note, position }
            }
        })
    }, [])

    const determineNewPosition = () => {

    }

    return (
        <div>
            {notes.map((note) => {
                return <Note
                    key={note.id}
                    content={note.text}
                />
            })}
        </div>
    )
}

export default Notes