import React, { useRef } from 'react'

function Videojs() {
    const playerRef = useRef(null)
    const videoRef = useRef(null)
    return (
        <div>
            <div ref={ videoRef } />
        </div>
    )
}

export default Videojs