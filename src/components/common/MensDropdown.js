import React from 'react';
import { Link } from 'react-router-dom';

function MensDropdown() {

  return (
    <div className="dropdown">
      <button className="dropbtn">MEN</button>
      <div className="dropdown-content">
        <Link to="/products/">All</Link>
        <Link to="/products/filter/mens&knitwear">Knitwear</Link>
        <Link to="/products/filter/mens&jeans">Jeans</Link>
        <Link to="/products/filter/mens&coats-and-jackets">Coats and Jackets</Link>
        <Link to="/products/filter/mens&tops">Tops</Link>


      </div>
    </div>
  );
}

export default MensDropdown;
