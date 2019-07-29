import React, { Component } from "react";
import { Card, CardHeader, Row, Container } from "reactstrap";
import Api from "../utils/Api";
import image from "../components/img/book.jpg";
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
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(res =>
        this.setState({
          books: res.data,
          author: "",
          title: "",
          desc: "",
          image: "",
          link: "",
          isSaved: "",
        })
      )
      .then(console.log(this.state))
      .then(console.log(this.state.savedBooks))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Card>
          <CardHeader>
            <h2 className="text-center">Saved Books</h2>
          </CardHeader>
          {this.state.books.map(book => (
            <h2>{book.image}</h2>
          ))}
          <Row>
            <div className="col-2 col-sm-4 text-center">
              {" "}
              <img
                src={image}
                className="mt-3 ml-2"
                alt="Great book"
                style={{ maxWidth: "60%", border: "solid lightgrey .2em" }}
              />
              <Row className="text-center mt-2">
                <button className="btn btn-sm btn-danger mx-auto mb-2">
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
