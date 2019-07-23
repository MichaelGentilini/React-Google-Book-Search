import React from "react";
import { Jumbotron, Container, NavbarBrand } from "reactstrap";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavbarBrand href="https://www.google.com/googlebooks/about/images/hero_books.jpg" />
        {/* <a className="navbar-brand" href="/">
          Google Books List
          <img src="https://www.google.com/googlebooks/about/images/hero_books.jpg" />
        </a> */}
      </nav>
      <Container>
        <Jumbotron className="mt-5 text-white bg-danger">
          <h1>Welcome to the Google Book Search</h1>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Nav;
