import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>E-Book Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
