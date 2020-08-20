import React, { useState, useEffect } from "react";
import List from "../components/List";
import { getBooks } from "../api/BooksApi";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import styled from "@emotion/styled";
import AddButton from "../components/Button";
import plusIcon from "../assets/plus-icon.svg";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgray;
  border-radius: 30px;
  margin: 20px;
  padding: 10px;
`;

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
          <Container key={book.id}>
            {" "}
            {book.title}
            {book.author}
          </Container>
        ))}
      </main>
    </>
  );
}

export default Books;
