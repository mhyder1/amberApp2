import React from 'react';
import { Link } from 'react-router-dom'

const UserPage = ({ideas}) => {
    const list = ideas.map(idea => (
        <li>
            <span>Id: {idea.id}</span>{' '}
            <span>Name: {idea.name}</span>
        </li>
    ))
    return(

        <div>
            <section style={{width: '200px', display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/ideas'>View Idea List</Link>
                <Link to='/create-idea'>Create Idea</Link>
            </section>
            <section>
                <h2>Accepted ideas</h2>
                <ul>
                    {list}
                </ul>
            </section>
            
            
        </div>
    )
}

export default UserPage;