import React, { useState, useEffect } from "react";
import List from "../components/List";
import { getBooks } from "../api/BooksApi";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function Books() {
  const { data: books, loading, error } = useAsync(getBooks);

  return (
    <>
      <header className="app__header">
        <h1>Books I want to read</h1>
        {/* <input
          className="header__input"
          placeholder="Add your favourite Books"
        /> */}
      </header>

      <main>
        {error && <div>Error</div>}
        {loading && <div>Loading...</div>}
        {books?.map((book) => (
          <div key={book.id}>
            {book.title}
            {book.author}
          </div>
        ))}
        <Link to="/add">Add Books </Link>
        <List></List>
      </main>
    </>
  );
}

export default Books;
