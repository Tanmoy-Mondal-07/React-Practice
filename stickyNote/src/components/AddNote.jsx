import React from 'react'

function AddNote() {
    return (
        <div
            style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: '30vw',
                margin: '16px auto',
            }}
        >
            <input
                placeholder="Enter note..."
                style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '14px',
                }}
            />
            <button
                style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.5)',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: '0.2s',
                }}
            >
                ➕
            </button>
        </div>
    )
}

export default AddNote