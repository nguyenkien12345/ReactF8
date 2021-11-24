import React, { useState,useRef,useEffect } from 'react'

function DemoUseRef() {

    const [count,setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        // Giữ lại giá trị cũ để so sánh với giá trị hiện tại
        prevCount.current = count;
    },[count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        },1000)
        console.log('START: ' + timerId.current); // In ra ID của biến timerId khi bắt đầu
    };

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('END: ' + timerId.current);  // In ra ID của biến timerId khi kết thúc
    }

    // so sánh giá trị cũ với giá trị hiện tại
    console.log(count, prevCount.current);

    return (
        <div style={{padding:'20px'}}>
            <p>{count}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default DemoUseRef
