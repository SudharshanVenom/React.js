import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
