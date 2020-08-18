export const getBooks = async () => {
  const response = await fetch("http://localhost:3333/books");
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};
