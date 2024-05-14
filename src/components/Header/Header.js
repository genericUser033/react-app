import React, {useState} from 'react';
import { HeaderWrapper } from './Header.styled';

const Header = () => {
    const [test, setTest] = useState(0);

    const increaseTestNumber = () => {
        setTest(test + 1);
    };

    return  (
        <HeaderWrapper>
            <p>Header</p>
            <p>Using useState to update count</p>
            <p onClick={() => increaseTestNumber()}>Test value = {test}</p>
        </HeaderWrapper>
    );
};

export default Header;
