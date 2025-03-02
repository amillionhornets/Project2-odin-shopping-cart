// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className='bg-green-500'>
      <ul className="list-none flex pt-2 pb-2">
        <li><Link className='ml-5' to="/"> ʚïɞ </Link></li>
        <li><Link className='ml-10 font-semibold hover:text-gray-500' to="/">Home</Link></li>
        <li><Link className='ml-10 font-semibold hover:text-gray-500' to="/shop">Shop</Link></li>
        <li><Link className='ml-10 font-semibold hover:text-gray-500' to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
