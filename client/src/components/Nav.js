import React from "react";
import { Container } from "reactstrap";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 py-4">
      <Container>
        <a className="navbar-brand" href="/">
          <h3>Google Books Search</h3>
        </a>
        <div className="ml-auto">
          <a className="btn btn-success text-left mr-3" href="/">
            Search
          </a>
          <a className="btn btn-info text-left" href="/saved">
            Saved
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
