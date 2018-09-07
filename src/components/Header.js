import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

class Header extends React.Component {
  handleLogout = () => {
    Auth.removeToken();
    this.props.history.push('/');
  }
  render() {
    return(
      <header className="navbar">
        <Link className="navbar-item" to="/">HOME</Link>
        <Link className="navbar-item" to="/products">BROWSE</Link>
        <Link className="navbar-item" to="/products/new">ADD A PRODUCT</Link>
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">SIGN UP</Link>}
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">LOGIN</Link>}
        {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>LOG OUT {Auth.currentUsername()}</a>}
      </header>
    );

  }
}

export default withRouter(Header);
