import React, { useState } from "react";
import Card from "./Card";

export default function Colbox({ data, criteria }) {
  // const newArr = new Array(data);
  // console.log(data);

  return (
    <div className="colbox">
      <h4 id="status">{eval(`data[0].${criteria}`)}</h4>
      {data.map((itm) => (
        // <h1>{itm.id}</h1>
        <Card title={itm.title} id={itm.id} tag={itm.tag} />
      ))}
    </div>
  );
}
