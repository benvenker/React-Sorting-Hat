import React from "react";
import houses from "../houses.js";

const gryffindor = houses[0];
console.log(gryffindor);
console.log("houses length: ", houses.length);

const Result = () => {
  const index = Math.floor(Math.random() * Math.floor(houses.length));
  const house = houses[index];
  console.log("index: ", index);
  return (
    <div>
      <h1>Congratulations, you're a member of House {house.name}!</h1>
      <img src={house.crestUrl} alt="" />
      <h2>House {house.name} Values</h2>
      <ul>
        {house.values.map(value => {
          return <li>{value}</li>;
        })}
      </ul>
      <p>{house.description}</p>
    </div>
  );
};

export default Result;
