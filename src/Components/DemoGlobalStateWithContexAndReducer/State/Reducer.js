import * as actions from './Constants';

const initialState = {
    todo: '',
    todos: []
}

const reducer = (state,action) => {
    const {type,payload} = action;
    switch(type) {
        case actions.SET_TODO:
            return {
                ...state,
                todo: payload
            }
        case actions.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case actions.DELETE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(payload,1)
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid Error')
    }
}

export { initialState };
export default reducer;