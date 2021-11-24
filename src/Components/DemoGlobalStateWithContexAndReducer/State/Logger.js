import React from 'react'

function Logger(reducer) {
    return (prevState, action) => {

        console.group(action.type);

        console.log('PrevState: ', prevState);
        console.log('Action: ', action);

        const nextState = reducer(prevState, action);

        console.log('NextState: ', nextState);
        
        console.groupEnd();

        return nextState;
    }
}

export default Logger
