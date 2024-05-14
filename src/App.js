import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import UseState from "./components/UseState/UseState";
import FetchData from "./components/FetchData/FetchData";
import ReactDOMPractice from "./components/ReactDOMPractice/ReactDOMPractice";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Welcome name= "My name" color="black" />
          <Routes>
              <Route exact path="/" element={<UseState />} />
              <Route exact path="/color" element={<UseState />} />
              <Route exact path="/map" element={<FetchData />} />
              <Route exact path="/react-dom" element={<ReactDOMPractice />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
