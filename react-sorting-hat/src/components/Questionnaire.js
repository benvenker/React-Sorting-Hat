import React from "react";
import "./Questionnaire.css";

const Questionnaire = props => {
  const handleSubmit = (event, path) => {
    event.preventDefault();
  };
  return (
    <div className="questionnaire">
      <h1>Please Answer all of the following questions...</h1>
      <form>
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you value most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <button class="btn btn-submit">Submit!</button>
      </form>
    </div>
  );
};

export default Questionnaire;
