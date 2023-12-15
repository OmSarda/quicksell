import React from "react";
export default function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="card-head">
        <h3 id="card">{props.id}</h3>
        <img src="./logo192.png" alt="logo" />
      </div>

      <p id="title">{props.title}</p>
      <h4 id="tag">{props.tag[0]}</h4>
    </div>
  );
}
