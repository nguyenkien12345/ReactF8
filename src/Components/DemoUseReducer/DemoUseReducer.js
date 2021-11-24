import React, { useReducer, useRef } from 'react';
import Logger from './Logger';

// 1. Init state
const initialState = {
    job: '',
    jobs: []
}

// 2. Actions
const actions = {
    SET_JOB: 'SET_JOB',
    ADD_JOB: 'ADD_JOB',
    DELETE_JOB: 'DELETE_JOB'
}

const setJob = (payload) => {
    return {
        type: actions.SET_JOB,
        payload: payload
    }
}

const addJob = (payload) => {
    return {
        type: actions.ADD_JOB,
        payload: payload
    }
}

const deleteJob = (payload) => {
    return {
        type: actions.DELETE_JOB,
        payload: payload
    }
}

// 3. Reducer
const reducer = (state, action) => {

    switch(action.type) {
        case actions.SET_JOB:
                return {    
                    ...state,                             // Bảo lưu các state cũ
                    job: action.payload,                  // ghi đè state job
                }
        case actions.ADD_JOB:
                return {
                    ...state,                             // Bảo lưu các state cũ
                    jobs: [...state.jobs, action.payload] // ghi đè state jobs (lấy ra ds công việc cũ rồi thêm công việc mới) 
                }
        case actions.DELETE_JOB:
            const newJobs = [...state.jobs];              // Lấy ra ds công việc cũ
            newJobs.splice(action.payload,1)
            return {
                ...state,                                 // Bảo lưu các state cũ
                jobs: newJobs,                            // ghi đè state jobs
            }
        default:
            throw new Error("INVALID ERROR");
    }

}

// 4. Dispatch
function DemoUseReducer() {

    const [state,dispatch] = useReducer(Logger(reducer), initialState);

    const {job, jobs} = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    return (
        <>
            <h3>TODO</h3>
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Enter Todo..." 
                value={job} 
                onChange={(e) => {dispatch(setJob(e.target.value))}}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((item,index) => (
                    <li key={index}>
                        {item}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DemoUseReducer;

// Lý thuyết

// Hàm Logger có nhiệm vụ khi nó ôm reducer nào thì reducer đó khi được dispatch chạy thì nó sẽ console.log ra cái action, cái prevState (state cũ), nextState (state mới)

// Logger(reducer) hàm Logger nhận reducer như là đối số. Khi ta bọc reducer trong hàm Logger thì ta cần phải đảm bảo chắc chắn là cái hàm Logger đó trả lại cái reducer vì hàm useReducer trả về đối số đầu tiên là 1 reducer.
