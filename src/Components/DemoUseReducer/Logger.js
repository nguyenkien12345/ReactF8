import React from 'react'

function Logger(reducer) {
    // Bởi vì khi thằng reducer bên DemoUseReducer chạy thì nó sẽ nhận về 2 thằng state và action. Nên ở bên Hàm Logger ta vẫn có thể nhận được state và action đó
    return (prevState,action) => {
        // Nhóm lại theo action
        console.log(action.type);
        
        console.log('Action: ', action);

        console.log('Prev state: ',prevState);

        // Reducer khi chạy xong nó luôn trả về 1 state mới
        const newState = reducer(prevState, action);

        console.log('Next state: ',newState);

        // Kết thúc nhóm
        console.groupEnd();

        return newState;
    }
}

export default Logger;
// Logger có nhiệm vụ console.log dữ liệu ra 1 cách đẹp mắt dễ nhìn, dễ đọc
