import React from 'react'

function Notes({ notes = [], setnotes = () => { } }) {
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