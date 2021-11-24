import React, {useRef} from 'react';
import Video from './Video';

function DemoUseImperativeHandle() {

    const videoRef = useRef();

    const handleStart = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <>
            <Video ref={videoRef}/>
            <button onClick={handleStart}>Play</button>
            <button onClick={handlePause}>Stop</button>
        </>
    )
}

export default DemoUseImperativeHandle;

