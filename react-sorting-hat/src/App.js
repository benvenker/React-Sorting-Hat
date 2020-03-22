import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import Welcome from "./components/Welcome";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/questionnaire" component={Questionnaire}></Route>
      <Route path="/result" component={Result}></Route>
    </div>
  );
}

export default App;
