import React, { use, useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useLocation } from "react-router-dom";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";
  const books = useContext(BooksContext);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log(query);
    console.log(search);
  });

  return (
    <div>
      <h1> All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
