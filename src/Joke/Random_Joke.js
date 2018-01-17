import React from "react";

const Random = ({val, func}) => (
  <div>
    <h1>Random Joke</h1>
    <p>{val}</p>
    <button onClick={func}>Another one</button>
  </div>
)

export default Random;