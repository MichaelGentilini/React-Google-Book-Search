import React from "react";
import { Card, CardHeader } from "reactstrap";

function Results(props) {
  return (
    <Card className="mt-3">
      <CardHeader>
        <h2>{props.title}</h2>
      </CardHeader>
      <Card className="mt-2">
        <img src={props.image} />
        <p>by</p>
        <h5>{props.author}</h5>
        <p>{props.desc}</p>
      </Card>
    </Card>
  );
}

export default Results;
