import React from 'react';
import { Link } from 'react-router-dom';

function WomensDropdown() {

  return (
    <div className="dropdown">
      <button className="dropbtn">WOMEN</button>
      <div className="dropdown-content">
        <Link to="/products/filter/skirts">Skirts</Link>
        <Link to="/products/filter/jeans">Jeans</Link>
        <Link to="/products/filter/dresses">Dresses</Link>
        <Link to="/products/filter/coats-and-jackets">Coats and Jackets</Link>
      

      </div>
    </div>
  );
}

export default WomensDropdown;
