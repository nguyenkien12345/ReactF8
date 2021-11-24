import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import videoLisa from '../../Videos/lisa.mp4'

function Video(props,ref) {

    const videoRef = useRef();

    // Nhận vào 2 đối số 1 là cái ref, 2 là cái callback
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        },
    }))

    return (
        <video src={videoLisa} width={300} height={300} ref={videoRef}></video>
    )
}

export default forwardRef(Video);

// Tại component Video chúng ta đang public ra ngoài hẳn 1 cái ref. Mà cái ref này là của 1 thành phần nằm bên trong component Video nhưng chúng ta lại open hết ra ngoài trong khi nhu cầu của chúng ta chỉ cần pause và play. Việc đó khiến cho các component khác có thể chọc vào Video để phá hoại hay thay đổi thuộc tính của component Video nên chúng ta sẽ dùng đến useImperativeHandle chỉ export ra ngoài 2 thằng play và pause ngoài 2 thằng này ra các component khác không thể sử dụng các thuộc tính khác ngoại trừ play và pause

// Nguyên cái phần callback trong useImperativeHandle sẽ được gán cho videoRef

