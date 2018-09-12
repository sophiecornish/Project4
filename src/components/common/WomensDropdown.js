import React from 'react';
import { Link } from 'react-router-dom';

function WomensDropdown() {

  return (
    <div className="dropdown navbar-item">
      <button className="dropbtn">WOMEN</button>
      <div className="dropdown-content">
        <Link to="/products/filter/womens&skirts">Skirts</Link>
        <Link to="/products/filter/womens&knitwear">Knitwear</Link>
        <Link to="/products/filter/womens&jeans">Jeans</Link>
        <Link to="/products/filter/womens&dresses">Dresses</Link>
        <Link to="/products/filter/womens&coats and jackets">Coats and Jackets</Link>
        <Link to="/products/filter/womens&tops">Tops</Link>


      </div>
    </div>
  );
}

export default WomensDropdown;
