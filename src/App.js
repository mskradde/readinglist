import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <header className="app__header">
            <h1>Books I want to read</h1>
            <input placeholder="Find your favourite Book" />
          </header>
          <main>
            <List>(Tolle Bücher)</List>
          </main>
          <Route path="/books">Books</Route>
          <Route path="/books:name">Details</Route>
        </Switch>
        <footer>
          <Link to="/books">Books</Link>
          <Link to="/books:name">Details</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
