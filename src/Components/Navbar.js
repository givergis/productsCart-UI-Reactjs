import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return <div className='header'>

      <ul>
          <li><Link to='/products' style={{textDecoration: 'none'}}>Products</Link></li>
          <li><Link to='/profile' style={{textDecoration: 'none'}}>Profile</Link></li>
          <li><Link to='/shop' style={{textDecoration: 'none'}}>Shop</Link></li>
          <li><Link to='/checkout' style={{textDecoration: 'none'}}>Check out</Link></li>
      </ul>

        </div>;
}

export default Navbar;

