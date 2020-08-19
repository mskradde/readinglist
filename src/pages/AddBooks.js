import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addNewBook } from "../api/BooksApi";

function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
    // console.log(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const book = {
      title,
      author,
    };
    await addNewBook(book);
    setTitle("");
    setAuthor("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </label>
        <input type="submit" value="addBook" />
      </form>
      <Link to="/">Books</Link>
    </>
  );
}

export default AddBooks;