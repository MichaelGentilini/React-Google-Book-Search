import React, { Component } from "react";
import { Card, CardHeader, Row, Container } from "reactstrap";
import Api from "../utils/Api";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      author: "",
      link: "",
      title: "",
      subtitle: "",
      desc: "",
      image: "",
    };
  }

  componentDidMount() {
    Api.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
        })
      )
      .then(console.log(this.state))
      .then(console.log(this.state.savedBooks))
      .catch(err => console.log(err));
  }

  deleteThisBook = id => {
    Api.deleteBook(id)
      .then(res => this.loadBooks())
      .then(window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Card>
          <CardHeader className="text-center bg-info text-white py-5">
            <h2>Saved Books</h2>
          </CardHeader>
          {this.state.books.length ? (
            <Card>
              {this.state.books.map(book => (
                <Row>
                  <div className="col-2 col-sm-4 text-center">
                    {" "}
                    <img
                      src={book.image}
                      className="mt-3 ml-2"
                      alt="Great book"
                      style={{
                        maxWidth: "70%",
                        border: "solid lightgrey .2em",
                      }}
                    />
                    <Row className="text-center mt-2">
                      <button
                        className="btn btn-sm btn-danger mx-auto mb-2"
                        onClick={() => this.deleteThisBook(book._id)}
                      >
                        Delete Book
                      </button>
                    </Row>
                  </div>
                  <div className="col col-sm-8 mt-2 text-left">
                    <CardHeader className="text-center" id={book._id}>
                      <h4>
                        <a className="mt-2 mb-2" href={book.link}>
                          {book.title}
                        </a>
                      </h4>
                      <p />
                      <h6>{book.subtitle} </h6>
                    </CardHeader>
                    <h6>
                      {" "}
                      <strong>Author:</strong>
                      &nbsp;{book.author}&nbsp;
                    </h6>
                    <p>
                      <em> {book.desc}</em>
                    </p>

                    <h6>
                      <a className="btn btn-warning mt-2" href={book.link}>
                        Preview Here
                      </a>
                    </h6>
                  </div>
                </Row>
              ))}
            </Card>
          ) : (
            <h2>No Saved Books</h2>
          )}
        </Card>
      </Container>
    );
  }
}

export default Saved;
