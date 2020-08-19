export const getBooks = async () => {
  const response = await fetch("http://localhost:3333/books");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
};

export const addNewBook = async (book) => {
  const response = await fetch("http://localhost:3333/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};
