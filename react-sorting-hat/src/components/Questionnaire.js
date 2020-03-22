import React from "react";
import "./Questionnaire.css";

const Questionnaire = props => {
  const history = props.history;
  const handleSubmit = event => {
    event.preventDefault();
    history.push("/result");
  };
  return (
    <div className="questionnaire">
      <h1>Please Answer all of the following questions...</h1>
      <form>
        <label>What is your strongest quality?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What is your weakest quality?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What qualities do you admire the most?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>Whos is the ghost of Slytherin House?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>Who is the head of Gryffindor?</label>
        <input type="text" placeholder="Enter qualities..." />
        <label>What is your greatest fear?</label>
        <input type="text" placeholder="Enter qualities..." />
        <button onClick={handleSubmit} class="btn btn-submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
