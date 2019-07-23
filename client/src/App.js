import React, { Component } from "react";
import "./App.css";
import Books from "./components/Books.js";
import Nav from "./components/Nav.js";
import Results from "./components/Results.js";
import { Container, Card, CardHeader } from "reactstrap";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Books />

        {/* <Results /> */}
      </Container>
    </div>
  );
}

export default App;
