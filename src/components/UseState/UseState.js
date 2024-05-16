import React, {useState} from 'react';
import {wait} from "@testing-library/user-event/dist/utils";

const UseState = () => {
    const  [color, setColor] = useState("black");
    const updateColor = () => {
        setColor("blue");
    } ;

    const showInput = () => {
        wait(500).then(r => setColor("red"));
    }

    return (
        <div>
            <button type="button" onClick={
                (event) => {
                    console.log(event.target)
                    console.log(event)
                    updateColor();
                    showInput();
                }
            } style={{color: color}}>Change color</button>
            <br />
            {
                color === "red" && <p>Hi, I am summoned</p>
            }
        </div>
    )
}

export default UseState;
