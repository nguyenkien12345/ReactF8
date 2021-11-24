import React, {useRef} from 'react';
import { useStore } from './Store';
import { actions } from './State';

function App() {

    const [state,dispatch] = useStore();

    const {todo,todos} = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todo));
        dispatch(actions.setTodo(''));
        inputRef.current.focus();
    }

    return (
        <div style={{padding: '20px'}}>
            <input type="text" placeholder="Enter Todo..." value={todo} 
            onChange={(e) => {dispatch(actions.setTodo(e.target.value))}} 
            ref={inputRef}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
               {todos.map((item,index) => (
                   <li key={index}>
                       {item} 
                       <span>Update</span>
                       /
                       <span onClick={() => {dispatch(actions.deleteTodo(index))}}>Delete</span>
                    </li>
               ))} 
            </ul>
        </div>
    )
}

export default App
