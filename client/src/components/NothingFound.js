import React from "react";
import { Container, Jumbotron, Row, Col } from "reactstrap";

function wrongPage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
            style={{
              backgroundImage:
                'url("https://media.cntraveler.com/photos/5ab2dd0960926f53f6fec0d2/16:9/w_1024,c_limit/George-Peabody-Library-E665TT.jpg")',
            }}
          >
            <h1 className="text-white">Book Not Found</h1>
            <h1>
              <p />
              <a href="/" className="btn btn-lg btn-success mt-5">
                Take me Home
              </a>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default wrongPage;
