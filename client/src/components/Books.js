import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";
import Results from "./Results.js";
import Api from "../utils/Api.js";
import axios from "axios";

class Books extends Component {
  constructor(props) {
    super(props);
    // Setting our component's initial state
    this.state = {
      allbooks: [],
      search: "",
      title: "",
      author: "",
      desc: "",
      image: "",
      link: "",
      subtitle: "",
      id: "",
    };
    this.addThisBook = this.addThisBook;
  }

  // // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   // this.searchGoogle("REACT");
  // }

  // Loads all books  and sets them to this.state.books
  searchGoogle = title => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/?q=" + title)
      .then(response => {
        console.log(response.data.items);
        this.setState({
          allbooks: response.data.items,
        });
      })
      .catch(err => console.log(err));
  };

  // saveThisBook = book => {
  //   console.log(book);
  //   const newBook = {
  //     id: book.id,
  //     title: book.volumeInfo.title,
  //     author: book.volumeInfo.authors,
  //     desc: book.volumeInfo.description,
  //     subtitle: book.volumeInfo.subtitle,
  //     // image: book.volumeInfo.imageLinks.thumbnail,
  //     link: book.volumeInfo.previewLink,
  //   };
  //   console.log(newBook);
  // };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search is set in state and passed to google books.
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      search: this.state.title,
    });
    this.searchGoogle(this.state.search);
  };

  render() {
    return (
      <div>
        <Container>
          <Form
            className="text-left"
            name="search"
            onClick={this.handleFormSubmit}
          >
            <Card>
              <CardHeader className="bg-danger text-white py-5">
                <h2 className="text-center">Enter Title or Subject</h2>
              </CardHeader>
              <FormGroup>
                <Input
                  type="text"
                  name="search"
                  id="searchTitle"
                  placeholder="Javascript for Dummies"
                  value={this.state.search}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button
                className="btn-block btn-success"
                disabled={!this.state.search}
              >
                Submit
              </Button>
            </Card>
          </Form>
          {this.state.allbooks.map(book => {
            return (
              <div>
                <Results
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  author={
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors
                          .join(", ")
                          .replace(/, ((?:.(?!, ))+)$/, " and $1")
                      : "author unknown"
                  }
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "http://www.chattanoogabystander.com/wp-content/uploads/2019/01/book-stack.jpg"
                  }
                  desc={
                    book.volumeInfo.description
                      ? book.volumeInfo.description.slice(0, 300)
                      : "No description was provided"
                  }
                  link={book.volumeInfo.previewLink}
                  subtitle={book.volumeInfo.subtitle}
                />
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Books;
