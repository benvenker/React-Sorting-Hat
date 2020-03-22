import React from "react";

const Welcome = props => {
  const history = props.history;
  const handleClick = event => {
    event.preventDefault();
    history.push("/questionnaire");
  };
  return (
    <div>
      <h1>Welcome to the Sorting Hat!</h1>
      <p>
        The Sorting Hat will decide to which of the four houses you will be
        assigned. You will be asked a series of questions which will help the
        Hat decide where to place you. Good luck!
      </p>
      <button onClick={handleClick}>Begin!</button>
    </div>
  );
};

export default Welcome;
