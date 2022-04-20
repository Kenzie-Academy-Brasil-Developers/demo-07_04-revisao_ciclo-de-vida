import { useEffect, useState } from "react";
import Book from "../Book";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  // UseEffect - Montagem
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=programacao")
      .then((res) => {
        return res.json();
      })
      .then((res) => setBooks(res.items));
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </ul>
    </div>
  );
};

export default BooksList;
