import React, {useEffect} from 'react';
import { ReactDomPracticeWrapper } from './ReactDOMPractice.styled';

const ReactDomPractice = () => {

    //useEffect so it will only render once
    useEffect(() => {
        const h1 = document.createElement("h1");
        h1.innerText = "Hello guys";
        h1.id = "h1";
        h1.className = "heading";
        h1.title = "Hello";
        document.body.appendChild(h1);
        return () => {
            // Cleanup function to remove the h1 element when the component unmounts
            document.body.removeChild(h1);
        };
    }, []);

    //React approaching
    const elementTwo = React.createElement("p", {
        title:"p", className:"paragraph", id:"guess"
    }, "Hello guys 2!")
    console.log(elementTwo);

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = "Javascript";

    const li2 = document.createElement("li");
    li2.innerText = "ReactJS";

    // ul.appendChild(li).appendChild(li2);
    // document.body.append(ul);

    //React approaching
    const reactList = React.createElement("ul", {
        id: "reactList"
    }, React.createElement("li", null, "Javascript"),
        React.createElement("li", null, "ReactJS"));

    const root = document.getElementById("root")
    // root.appendChild(reactList);

    return (
        <ReactDomPracticeWrapper>
        </ReactDomPracticeWrapper>
    );
}

export default ReactDomPractice;
