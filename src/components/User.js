import React from 'react'

export default function User({user}) {
    const url = `/public${user.logo.substring(1, user.logo.length)}`
    return (
        <div className="user">
            <div className="user-left">
                <img href={url} alt="logo"/>
                <div className="user-top">
                    <h3 
                        className="user-company">
                        {user.company}
                    </h3>
                    {user.new ? <span   className="new">NEW!</span> : null}
                    {user.featured ? <span className="featured">Featured</span> : null}
                </div>
                <h4
                    className="user-position">
                    {user.position}
                </h4>
                <p>
                    {user.postedAt} <span className="dot"></span> {user.contract} <span className="dot"></span> {user.location}
                </p>
            </div>
            <hr/>
            <ul className="user-language-list">
                {user.languages?.map(language => {
                    return <li className="user-language">{language}</li>
                })}
                {user.tools?.map(tool => {
                    return <li className="user-tool">{tool}</li>
                })}
            </ul>
        </div>
    )
}
