import React from 'react';
import {ReactDomPracticeWrapper} from './ReactDOMPractice.styled';
import ReactDOM from 'react-dom/client';
import {jsx} from "react/jsx-runtime";

const ReactDomPractice = () => {

    //React approaching
    // const elementTwo = React.createElement("p", {
    //     title: "p", className: "paragraph", id: "guess"
    // }, "Hello guys 2!")
    // console.log(elementTwo);
    //
    // //React approaching
    // const list = React.createElement("ul", {
    //         id: "list"
    //     }, React.createElement("li", null, "Javascript"),
    //     React.createElement("li", {}, "ReactJS"));
    //
    // const container = document.createElement('div');
    // document.body.appendChild(container); // add div to the body
    // ReactDOM.createRoot(container).render(list);
    //
    // const value = 'React'
    // const ul = <ul className="courseList">
    //     <li style={{font: "15px",}}>Ab</li>
    //     <li>{value}</li>
    // </ul>

    const courses=[
        {
            name: "HTML, CSS"
        },
        {
            name: 'React'
        },
        {
            name: 'Java'
        }
    ]

    const Jsx = (
        <ul className="courseList">
            {
                courses.map((course, i) => {
                    console.log(course.name)
                    return <li key={i}>{course.name}</li>
                    }
                )
            }
        </ul>
    )
    // const root = document.getElementById('div');
    // document.body.appendChild(root);
    // ReactDOM.createRoot(root).render(Jsx);

    console.log(Jsx);
    // const list = <ul className="courseList">
    //     <li style= {{font:"15px",}} >Ab</li>
    //     <li>{value}</li>
    // </ul>

    return (
        <ReactDomPracticeWrapper>
        </ReactDomPracticeWrapper>
    );
}

export default ReactDomPractice;
