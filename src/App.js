import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./components/List";
import { getBooks } from "./api/BooksApi";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      const books = await getBooks();
      setBooks(books);
    }
    fetchBooks();
  }, []);
  console.log(books);
  return (
    <Router>
      <div className="app">
        <Switch>
          <>
            <header className="app__header">
              <h1>Books I want to read</h1>
              <input
                className="header__input"
                placeholder="Find your favourite Book"
              />
            </header>
            <main>
              {books?.map((book) => (
                <div key={book.id}>
                  {book.title}
                  {book.author}
                </div>
              ))}
              <List></List>
            </main>
          </>
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
