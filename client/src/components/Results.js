import React from "react";
import { Row, Card, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

function Results(props) {
  return (
    <Card id={props.id} className="mt-3">
      <CardHeader>
        <Link to={"/books/" + props.id}>
          <h2>{props.title}</h2>
        </Link>
        <h6>{props.subtitle}</h6>
      </CardHeader>
      <Row>
        <div className="col-2 col-sm-4 text-center">
          {" "}
          <img
            src={props.image}
            className="mt-3 ml-2"
            alt={props.subtitle}
            style={{ width: "100%" }}
          />
          <Row className="text-center mt-2">
            <button className="btn btn-sm btn-info mx-auto mb-2">Save</button>
          </Row>
        </div>
        <div className="col col-sm-8 mt-2 text-left">
          <h6>
            {" "}
            <strong>Author:</strong> &nbsp;{props.author}&nbsp;
          </h6>
          <h6>
            <strong>Published:</strong> &nbsp;{props.date}&nbsp;
          </h6>
          {/* <p>{props.desc}</p> */}
          <h6>
            <a className="btn btn-warning" href={props.link}>
              Preview {props.title}
            </a>
          </h6>
        </div>
      </Row>
    </Card>
  );
}

export default Results;
