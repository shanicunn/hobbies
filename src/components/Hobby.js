import React from "react";

function Hobby(props) {
  return (
    <div className="hobby-section">
        <h2>{props.name}</h2>
        <img
            src={props.imageURL}
        />
        <p>{props.description}</p>
    </div>
  );
}

export default Hobby;