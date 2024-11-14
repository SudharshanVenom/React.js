// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="home">
      <h2>Available Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>${book.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
