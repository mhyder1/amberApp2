import React from 'react';

const Idea = (props) => {
    // console.log(props.match.params.id)
    let index = props.match.params.id - 1
    const data = props.ideas[index]
    console.log(data.accepted)
    return (
        <>
            <p>Idea: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Description: {data.des}</p>
            <p>Status: {true ? 'accepted': 'unaccepted'}</p>
        </>
    )
}

export default Idea