import React, {useEffect, useState} from 'react';
import {WelcomeWrapper} from "./Welcome.styled";

const Welcome = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);
    }, );

    return(
        <WelcomeWrapper>
            <p>Welcome part</p>
            {/*<div style={{background: "pink"}}>*/}
                <h3>Using props for binding data</h3>
                Welcome <span style={{color: "green", fontSize: "20px"}}>{props.name}</span> to out terrible website
                <hr />
                We would like to inform that you have been here for {count} seconds
            {/*</div>*/}
        </WelcomeWrapper>
    );
}
export default Welcome;
