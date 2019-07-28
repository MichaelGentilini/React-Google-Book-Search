import React, { Component } from "react";
import { Row, Card, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

function Results(props) {
  const { id, author, title, subtitle, desc, image, link } = props;
  return (
    <Card id={id} className="mt-3">
      <CardHeader>
        <Link to={"/books/" + id}>
          <h2>{title}</h2>
        </Link>
        <h6>{subtitle}</h6>
      </CardHeader>
      <Row>
        <div className="col-2 col-sm-4 text-center">
          {" "}
          <img
            src={image}
            className="mt-3 ml-2"
            alt={subtitle}
            style={{ maxWidth: "50%", border: "solid lightgrey .2em" }}
          />
          <Row className="text-center mt-2">
            <button className="btn btn-sm btn-info mx-auto mb-2">Save</button>
          </Row>
        </div>
        <div className="col col-sm-8 mt-2 text-left">
          <h6>
            {" "}
            <strong>Author:</strong> &nbsp;{author}&nbsp;
          </h6>
          <p>{desc}</p>
          <h6>
            <a className="btn btn-warning mt-2" href={link}>
              Preview Here
            </a>
          </h6>
        </div>
      </Row>
    </Card>
  );
}

export default Results;
