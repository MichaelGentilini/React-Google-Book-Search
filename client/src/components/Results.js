import React from "react";
import { Card, CardHeader } from "reactstrap";

function Results() {
  return (
    <Card className="mt-3">
      <CardHeader>
        <h1>Results Go here</h1>
      </CardHeader>
      <Card className="mt-2">Result 1</Card>
      <Card className="mt-2">Result 2</Card>
      <Card className="mt-2">Result 3</Card>
    </Card>
  );
}

export default Results;
