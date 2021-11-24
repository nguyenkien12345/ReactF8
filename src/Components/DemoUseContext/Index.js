import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Content from './Content';


function Index() {

    const context = useContext(ThemeContext);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Content />
        </div>
    )
}

export default Index;
