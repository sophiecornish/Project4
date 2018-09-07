import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header className="navbar">
        <Link className="navbar-item" to="/">HOME</Link>
        <Link className="navbar-item" to="/products">BROWSE</Link>
        <Link className="navbar-item" to="/products/new">ADD A PRODUCT</Link>
        <Link className="navbar-item" to="/register">SIGN IN</Link>
      </header>
    );

  }
}

export default withRouter(Header);
