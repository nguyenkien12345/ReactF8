import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Components/DemoUseContext/ThemeContext';
import { StoreProvider } from './Components/DemoGlobalStateWithContexAndReducer/Store';

function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `Đây là nội dung của lesson-${id}`,
        info:`Thông tin chi tiết của lesson-${id}`
      })
    )
  },2000)
}

emitComment(1);
emitComment(2);
emitComment(3);
emitComment(4);
emitComment(5);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

