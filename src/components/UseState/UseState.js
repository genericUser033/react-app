import React, {useState} from 'react';

const UseState = () => {
    const  [color, setColor] = useState("black");
    const updateColor = () => {
        setColor("blue");
    } ;
    return <button onFocus={() => updateColor()} style={{color: color}}>Change color</button>
}

export default UseState;
