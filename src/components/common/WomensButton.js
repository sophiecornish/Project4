import React from 'react';
import { Link } from 'react-router-dom';

function WomensButton( { searchTerm }) {
  return (
    <section>
      <Link className="navbar-item" to="/products/filter/skirts">WOMENS</Link>

    </section>
  );
}

export default WomensButton;
