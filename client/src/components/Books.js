import React, { Component } from "react";
// import API from "./utils/Api.js";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import Results from "./Results.js";

class Books extends Component {
  // Setting our component's initial state
  state = {
    allbooks: [],
    title: "",
    authors: "",
    image: "",
    link: "",
    description: "",
    date: "",
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/?q=run")
      .then(response => response.items.json())
      .then(res => {
        console.log(res);
        const { books } = res;
        console.log(books[0]);
        this.setState({
          allbooks: books,
        });
        //   title: "",
        //   authors: "",
        //   image: "",
        //   link: "",
        //   description: "",
        //   date: "",
      })
      .catch(err => console.log(err));
  }

  // loadBooks = () => {};

  // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(`typing ${value}`);
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis,
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    console.log("Submitting");
    // }
  };

  render() {
    // var { isLoaded, books } = this.state;
    // console.log(books);
    // console.log(isLoaded);
    // if (!isLoaded) {
    //   return <div className="bg-info text-center">Loading...</div>;
    // } else {
    //   return <div className="bg-success text-center text-white">Loaded</div>;
    // }

    return (
      <div>
        <Container>
          <Form className="text-left" onSubmit={this.handleFormSubmit}>
            <h4 className="text-center">Enter Title or Author</h4>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="searchTitle"
                placeholder="Javascript for Dummies"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author(s)</Label>
              <Input
                type="text"
                name="authors"
                id="searchAuthor"
                placeholder="johnny Depp"
                value={this.state.authors}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <ul>
            <li />
          </ul>
          <Results />
        </Container>
      </div>
    );
  }
}

export default Books;
