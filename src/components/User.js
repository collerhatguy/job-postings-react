import React from 'react'

export default function User({user}) {
    return (
        <div className="user">
            <h3 
                className="user-company">
                {user.company}
            </h3>
            {user.new ? <span>New</span> : null}
            {user.featured ? <span>Featured</span> : null}
            <h4 
                className="user-position">
                {user.position}
            </h4>
            <p>{user.postedAt} * {user.contract} * {user.location}</p>
            <hr />
            <ul className="user-language-list">
                {user.languages.map(language => {
                    return <li className="user-language">{language}</li>
                })}
                {user.tools.map(tool => {
                    return <li className="user-tool">{tool}</li>
                })}
            </ul>
        </div>
    )
}
