import React from 'react'

function Note({ content, initialPos, ...props }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: '1px solid black',
        userSelect: 'none',
        padding: '10px',
        width: '200px',
        cursor: 'move',
        backgroundColor: 'lightblue'
      }}
      {...props}
    >📌 {content}</div>
  )
}

export default Note