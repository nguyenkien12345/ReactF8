import * as actions from './Constants';
 
export const setTodo = (payload) => {
    return {
        type: actions.SET_TODO,
        payload: payload
    }
}

export const addTodo = (payload) => {
    return {
        type: actions.ADD_TODO,
        payload: payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: actions.UPDATE_TODO,
        payload: payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: actions.DELETE_TODO,
        payload: payload
    }
}