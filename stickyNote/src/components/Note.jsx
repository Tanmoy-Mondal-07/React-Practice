import React, { forwardRef } from 'react'

const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)',
        userSelect: 'none',
        padding: '16px',
        width: '240px',
        cursor: 'move',
        color: 'lightgray',
        fontWeight: '500',
        fontFamily: 'sans-serif',
        // transition: 'all 0.1s ease-in-out',
      }}
      {...props}
    >
      <span>✏️</span> {content}
    </div>
  )
})

export default Note