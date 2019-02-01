import React from 'react';

export default function House(props){
    console.log(props.houses)

    return (
        <div>
            <p>House</p>
            <button onClick={() => props.delete()}>Delete</button>
        </div>
    )
    
}