import React from 'react'

export default function Search({search, undo}) {
    return (
        <li className="search">
            {search}
            <button onClick={() => undo()}>X</button>
        </li>
    )
}
