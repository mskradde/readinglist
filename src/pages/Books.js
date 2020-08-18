import React, { useState, useEffect } from "react";
import List from "../components/List";
import { getBooks } from "../api/BooksApi";

function Books(props) {
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
  );
}

export default Books;
