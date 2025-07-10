import React, { createRef, useEffect, useRef } from 'react'
import Note from './Note'

function Notes({ notes = [], setnotes = () => { } }) {

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

        const updatedNotes = notes.map((note) => {
            const savedNote = savedNotes.find((e) => e.id === note.id)
            if (savedNote) {
                return { ...note, position: savedNote.position }
            } else {
                const position = determineNewPosition()
                return { ...note, position }
            }
        });
        setnotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }, [notes.length])

    const noteRefs = useRef([])

    const determineNewPosition = () => {
        const maxX = window.innerWidth - 250
        const maxY = window.innerHeight - 250
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }

    const handleDragStart = (note, e) => {
        const noteRef = noteRefs.current[note.id].current;
        const rect = noteRef.getBoundingClientRect()
        const offsetX = e.clientX - rect.left
        const offsetY = e.clientY - rect.top

        const startPos = note

        console.log(rect);
    }

    return (
        <div>
            {notes.map((note) => {
                return <Note
                    key={note.id}
                    content={note.text}
                    initialPos={note.position}
                    ref={noteRefs.current[note.id]
                        ? noteRefs.current[note.id]
                        : (noteRefs.current[note.id] = createRef())}
                    onMouseDown={(e) => handleDragStart(note, e)}
                />
            })}
        </div>
    )
}

export default Notes