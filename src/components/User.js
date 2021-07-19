import React from 'react'

export default function User({ user }) {
    const url = `${process.env.PUBLIC_URL}${user.logo.substring(1, user.logo.length)}`;
    console.log(url)
    return (
        <div className="user">
            <div className="user-left">
                <img src={user.logo} alt="logo"/>
                <div className="user-top">
                    <h3 
                        className="user-company">
                        {user.company}
                    </h3>
                    {user.new ? <span className="new">NEW!</span> : null}
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
                {user.languages?.map(language => 
                    <li className="user-language">{language}</li>
                )}
                {user.tools?.map(tool => 
                    <li className="user-tool">{tool}</li>
                )}
            </ul>
        </div>
    )
}
