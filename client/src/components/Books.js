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
import Results from "./Results2.js";
import Api from "../utils/Api.js";
import axios from "axios";

class Books extends Component {
  // Setting our component's initial state
  state = {
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

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.searchGoogle("REACT");
  }

  // Loads all books  and sets them to this.state.books
  searchGoogle = title => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/?q=" + title)
      .then(response => {
        console.log(response.data.items);
        this.setState({
          allbooks: response.data.items,
          isLoaded: true,
        });
      })
      .catch(err => console.log(err));
  };

  saveThisBook = event => {
    event.preventDefault();
    if (this.state.title) {
      Api.saveBook({
        title: this.state.title,
        author: this.state.author,
        desc: this.state.desc,
        image: this.state.image,
        link: this.state.link,
        subtitle: this.state.subtitle,
        id: this.state.id,
      })
        // .then(res => this.loadThisBook())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  // loadThisBook = () => {};

  // Loads all books  and sets them to this.state.books
  loadThisBook = () => {
    Api.getBook(this.state.id)
      .then(res =>
        this.setState({
          title: "",
          author: "",
          date: "",
          desc: "",
          image: "",
          link: "",
          subtitle: "",
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(`typing ${value}`);
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();

    // this.setState({
    //   search: this.state.title,
    // });

    this.searchGoogle(this.state.search);
  };

  // if (this.state.title) {
  //   Api.saveBook({
  //     title: this.state.title,
  //   });

  // if (this.state.title) {
  //   API.saveBook({
  //     title: this.state.title,
  //     author: this.state.author,
  //     synopsis: this.state.synopsis,
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // console.log("Submitting");
  // }

  // };

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div className="bg-info text-center p-5">Loading...</div>;
    }
    return (
      <div>
        <Container>
          <Form
            className="text-left"
            name="search"
            onSubmit={this.handleInputChange}
          >
            <Card>
              <CardHeader>
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
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Card>
          </Form>
          {this.state.allbooks.map(book => {
            return (
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
            );
          })}
        </Container>
      </div>
    );
  }
}

// this.setState({
//   id: book.id,
//   title: book.volumeInfo.title,
//   author: book.volumeInfo.authors,
//   date: book.volumeInfo.publishedDate,
//   image: book.volumeInfo.imageLinks.thumbnail,
//   desc: book.volumeInfo.description,
//   link: book.volumeInfo.previewLink,
//   subtitle: book.volumeInfo.subtitle,
// });

export default Books;
