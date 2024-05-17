import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import UseState from "./components/UseState/UseState";
import FetchData from "./components/FetchData/FetchData";
import ReactDOMPractice from "./components/ReactDOMPractice/ReactDOMPractice";
import React from "react";
import ReactElement from "./components/ReactElement/ReactElement";
import {ReactElementWrapper} from "./components/ReactElement/ReactElement.styled";
import Component from "./components/Component/Component";

function App() {
    return (
        <BrowserRouter>
          <Header/>

          <Routes>
              <Route exact path="/" element={
                  <ReactElementWrapper>
                      <UseState />
                      <ReactElement />
                  </ReactElementWrapper>}/>
              <Route exact path="/component" element={<Component/>}/>
              <Route exact path="/map" element={<FetchData/>}/>
              <Route exact path="/dom" element={<ReactDOMPractice/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
