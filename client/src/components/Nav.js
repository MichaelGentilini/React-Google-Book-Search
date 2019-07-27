import React from "react";
import { Jumbotron, Container, NavbarBrand } from "reactstrap";
function Nav() {
  return (
    // <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 py-4">
      <a className="navbar-brand" href="/">
        <h4>
          {/* {" "}
          Google Books Search */}
          <img
            className="ml-5"
            src="https://www.google.com/googlebooks/about/images/hero_books.jpg"
            style={{ width: "20%" }}
          />
        </h4>
      </a>
      <div>
        <button className="btn btn-success text-left mr-3">Search</button>
        <button className="btn btn-info text-left">Saved</button>
      </div>
    </nav>

    //   <Container className="mt-2">
    //     <Jumbotron className="mt-2 text-white bg-danger">
    //       <h1>Google Book Search</h1>
    //     </Jumbotron>
    //   </Container>
    // </div>
  );
}

export default Nav;
