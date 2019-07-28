import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";

function Saved(props) {
  return (
    <Container>
      <Form
        className="text-left"
        name="search"
        onSubmit={props.handleInputChange}
      >
        <Card>
          <CardHeader>
            <h2 className="text-center">Enter Title or Subject</h2>
          </CardHeader>
          <FormGroup>
            <Input
              type="text"
              name="title"
              id="searchTitle"
              placeholder="Javascript for Dummies"
              value={props.title}
              onChange={props.handleInputChange}
            />
          </FormGroup>
          <Button
            className="btn-block btn-success"
            // disabled={!props.title}
            onClick={props.handleFormSubmit}
          >
            Submit
          </Button>
        </Card>
      </Form>
    </Container>
  );
}

export default Saved;
