import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default BookItem;
