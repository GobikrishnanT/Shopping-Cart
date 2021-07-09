import React from 'react';

function WrapperGiver(props) {
    
    return (
        <div className = {props.className}>
            {props.children}
        </div>
    )
}

export default WrapperGiver;
