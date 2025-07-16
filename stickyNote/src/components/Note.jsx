import React, { forwardRef } from 'react'

const Note = forwardRef(({ content, initialPos, noteId,updateed, ...props }, ref) => {
  const [updateTime, setupdateTime] = updateed

  function dleteNote() {
    const existingNote = JSON.parse(localStorage.getItem("notes"))
    const updatedNotes = existingNote.filter((e) =>  e.id != noteId )
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
    setupdateTime(updatedNotes)
  }

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '5px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
        userSelect: 'none',
        padding: '18px 20px',
        width: '260px',
        cursor: 'move',
        color: '#f0f0f0',
        fontWeight: '500',
        fontFamily: 'Segoe UI, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '8px',
      }}
      {...props}
    >
      <span style={{ flex: 1, wordBreak: 'break-word' }}>✏️ {content}</span>
      <button
        onClick={dleteNote}
        style={{
          top: '5px',
          right: '2px',
          position: 'fixed',
          background: 'transparent',
          border: 'none',
          color: '#ff5f5f',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        ❌
      </button>
    </div>
  )
})

export default Note