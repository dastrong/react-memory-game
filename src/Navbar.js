import React from 'react';
import './Navbar.css';

const Navbar = ({reset}) => (
  <div className='navbar'>
    <h1>Memory Game</h1>
    <a onClick={reset}>New Game</a>
  </div>
);

export default Navbar;