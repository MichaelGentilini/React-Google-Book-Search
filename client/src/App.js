import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Books from "./components/Books.js";
import Nav from "./components/Nav.js";
import wrongPage from "./components/NothingFound.js";
import BookDetail from "./components/BookDetail.js";
import Search from "./components/Search.js";

function App() {
  return (
    <Router>
      <div className="App mb-5">
        <Nav />
        {/* <Search /> */}
        {/* <Books /> */}
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/saved" component={BookDetail} />
          <Route exact path="/books/:id" component={BookDetail} />
          <Route component={wrongPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
