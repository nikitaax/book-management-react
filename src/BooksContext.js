import React, { useState, useEffect, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //TODO: setbooks
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
  );
};
