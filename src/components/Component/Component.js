import React from 'react';
import {ComponentWrapper, InputContent} from './Component.styled';

const Component = () => {
    const Form = () => {
        const Input = () => {
            return (
                <div>
                    <label>Input area</label>
                    <input/>
                </div>
            )
        };
        const Checkbox = () => {
            return <input type={"checkbox"} />
        };
        return {Input, Checkbox};
    }

    const { Input, Checkbox } = Form();

    console.log("Input")
    return (
        <ComponentWrapper>
            <InputContent>
                <Input />
            </InputContent>
            <Checkbox />
        </ComponentWrapper>
    )
};

export default Component;
