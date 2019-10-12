import React from 'react';
import { Link } from 'react-router-dom'

const IdeaList = ({ideas}) => {
    const list = ideas.map(idea => (
        <>
        <li>
            {/* <span>Id: {idea.id}</span>{' '}
            <span>Name: </span> */}
            <Link to={`/idea/${idea.id}`}>{idea.name}</Link>
        </li>
            
        </>
    ))
    return(
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default IdeaList;