import React from 'react'

function Note({ content, ...props }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
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