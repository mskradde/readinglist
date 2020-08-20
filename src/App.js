import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import AddButton from "./components/Button";
import GlobalStyles from "./pages/GlobalStyles";
import setFooter from "./components/Footer";
import plusIcon from "./assets/plus-icon.svg";

function App() {
  return (
    <>
      <GlobalStyles />
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
          <setFooter>
            <Link to="/add">
              <AddButton src={plusIcon} alt={"Plus Icon"} />
            </Link>
          </setFooter>

          {/* <footer>
          <Link to="/">Books</Link>
          <Link to="/add">Add Books</Link>
        </footer> */}
        </div>
      </Router>
    </>
  );
}

export default App;
