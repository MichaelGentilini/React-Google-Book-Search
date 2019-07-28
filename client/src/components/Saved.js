import React, { Component } from "react";
import { Card, CardHeader, Row, Container } from "reactstrap";
import Api from "../utils/Api";
import image from "../components/img/book.jpg";
class Saved extends Component {
  state = {
    book: {},
  };

  componentDidMount() {
    Api.getBooks()
      .then(console.log(this.state.book))
      .then(res => this.setState({ book: res.data }))
      .then(console.log(this.state.book))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Card>
          <CardHeader>
            <h2 className="text-center">Saved Books</h2>
          </CardHeader>
          <Row>
            <div className="col-2 col-sm-4 text-center">
              {" "}
              <img
                src={image}
                className="mt-3 ml-2"
                // alt={subtitle}
                alt="Great book"
                style={{ maxWidth: "60%", border: "solid lightgrey .2em" }}
              />
              <Row className="text-center mt-2">
                <button
                  className="btn btn-sm btn-danger mx-auto mb-2"
                  // onClick={() =>
                  //   this.addThisBook(
                  //     { id },
                  //     { author },
                  //     { title },
                  //     { subtitle },
                  //     { desc },
                  //     { image },
                  //     { link }
                  //   )
                  // }
                >
                  Delete Book
                </button>
              </Row>
            </div>
            <div className="col col-sm-8 mt-2 text-left">
              <h6>
                {" "}
                <strong>Author:</strong>
                {/* &nbsp;{author}&nbsp; */}
              </h6>
              {/* <p>{desc}</p> */}
              <h6>
                <a className="btn btn-warning mt-2" href="/">
                  Preview Here
                </a>
              </h6>
            </div>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Saved;
