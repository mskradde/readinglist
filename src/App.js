import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/add">
            <AddBooks />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
        <footer>
          <Link to="/">Books</Link>
          <Link to="/add">Add Books</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
