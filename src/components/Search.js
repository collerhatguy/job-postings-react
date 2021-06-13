import React from 'react'

export default function Search({search, undo}) {
    return (
        <div className="search">
            {search}
            <button onClick={() => undo()}>X</button>
        </div>
    )
}
