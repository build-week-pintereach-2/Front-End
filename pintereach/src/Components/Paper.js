import React from 'react';

export default function Paper(props){
    return (<div><p>{props.paper.title}</p>
        <p>{props.paper.author}</p>
        <p>{props.paper.category}</p>
</div>
)}
