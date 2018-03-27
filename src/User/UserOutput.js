import React from 'react';
import './styles.css';

const userOutput = (props) => {
    return (
        <div>
            <p className="parag">{props.userName}</p>
            <p></p>    
        </div>
    )
};

export default userOutput;