import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

function Paragraph() {

    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            Nguyễn Trung Kiên vs Nguyễn Hoài Gia Linh vs Vương Huỳnh Quế Trân
        </p>
    )
}

export default Paragraph;
