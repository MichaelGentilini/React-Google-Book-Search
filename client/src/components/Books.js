import React, { Component } from "react";
// import API from "./utils/Api.js";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
} from "reactstrap";
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
    const key = "AIzaSyC3iEmcKziS5dkrFVLvd_7WHasS9cLQCxA";
    axios
      .get("https://www.googleapis.com/books/v1/volumes/?q=run&key=" + key)
      // .get("https://www.googleapis.com/books/v1/volumes/?q=run")
      .then(response => {
        console.log(response.data.items);

        this.setState({
          allbooks: response.data.items,
          isLoaded: true,
        });
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
    var { isLoaded, allbooks } = this.state;
    // console.log(allbooks);

    if (!isLoaded) {
      return <div className="bg-info text-center">Loading...</div>;
    }

    // const books = allbooks.map(book => (
    //   <Card key={book.id}></Card>;
    // );

    // const presImages = presidentData.map(image => (
    //   <Button key={image.id} id={image.id} href={image.imgUrl} />
    // ));

    // else {
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
          {this.state.allbooks.map(book => {
            return (
              <Results
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                desc={book.volumeInfo.description}
              />
              //   <a href={"/books/" + book.id}>
              //     <strong>

              //     </strong>
              //     <img src= alt="Image" />
              //     <p>{book.volumeInfo.description}</p>
              //   </a>
            );
          })}
          {/* /> */}
          {/* {this.state.books.length ? ( */}
          <Card />
          {/* ) : (
            <h3>No Results to Display</h3>
          )} */}
        </Container>
      </div>
    );
  }
}

export default Books;
