import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import API from "../utils/Api.js";

class BookDetail extends Component {
  state = {
    book: {},
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    // const { id, author, title, subtitle, desc, image, link } = this.props;
    const { author, title, desc } = this.props;
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {title} by {author}Hello
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{desc}</p>
            </article>
          </Col>
        </Row>
        <button className="btn btn-sm btn-info mx-auto mb-2">
          Add to Saved
        </button>

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookDetail;