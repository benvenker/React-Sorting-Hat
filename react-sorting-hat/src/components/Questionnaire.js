import React from "react";
import "./Questionnaire.css";

const Questionnaire = props => {
  const history = props.history;
  const handleSubmit = (event, props) => {
    event.preventDefault();
    history.push("/result");
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
        <button onClick={handleSubmit} class="btn btn-submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
