import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Books />
          </Route>
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
