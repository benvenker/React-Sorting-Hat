import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import Welcome from "./components/Welcome";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props => <Welcome {...props} />} />
      <Route
        exact
        path="/questionnaire"
        render={props => <Questionnaire {...props} />}
      />
      <Route path="/result" component={Result} />
    </div>
  );
}

export default App;
