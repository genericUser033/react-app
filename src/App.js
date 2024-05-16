import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import UseState from "./components/UseState/UseState";
import FetchData from "./components/FetchData/FetchData";
import ReactDOMPractice from "./components/ReactDOMPractice/ReactDOMPractice";
import React from "react";
import ReactElement from "./components/ReactElement/ReactElement";
import {CardContainer} from "./components/ReactElement/ReactElement.styled";

import p1 from "./asset/b1ls41qi.png";
import p2 from "./asset/Banh-Chung-2.webp";
import p3 from "./asset/Banh-Cuon.webp";
import p4 from "./asset/Banh-Khot.webp";

function App() {
    var list = [
        { src: p1, alt: "alt1", title: "title1", desc: "desc1", published: "published" },
        { src: p2, alt: "alt2", title: "title2", desc: "desc2", published: "published" },
        { src: p3, alt: "alt3", title: "title3", desc: "desc3", published: "published" },
        { src: p4, alt: "alt4", title: "title4", desc: "desc4", published: "published" }
    ];
    return (
      <BrowserRouter>
          <Header/>
          <Welcome name="My name" color="black"/>

          <CardContainer>
              <ReactElement/>
          </CardContainer>
          <Routes>
              <Route exact path="/" element={<UseState/>}/>
              <Route exact path="/color" element={<UseState/>}/>
              <Route exact path="/map" element={<FetchData/>}/>
              <Route exact path="/dom" element={<ReactDOMPractice/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
