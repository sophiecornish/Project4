import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import SearchBar from './common/SearchBar';
import WomensDropdown from './common/WomensDropdown';
import MensDropdown from './common/MensDropdown';

import axios from 'axios';
import Options from '../lib/Options';
import FilterSelect from './common/FilterSelect';


class Header extends React.Component {
  state = {
    products: [],
    toggleSearch: false
  }

  handleLogout = () => {
    Auth.removeToken();
    this.props.history.push('/');
  }

  handleToggleSearch = () => {
    const toggle = !this.state.toggleSearch;
    this.setState({toggleSearch: toggle}, ()=> console.log(this.state));
  }

  componentDidMount() { // sets all products onto the state
    axios.get('/api/products')
      .then(res => {
        console.log('res.data is', res.data);
        this.setState({ products: res.data, filteredProducts: res.data });
      }
      );
  }



handleSearchChange = (event) => {
  console.log('event.target.value is', event.target.value);
  this.setState({ searchTerm: event.target.value });
}

handleSortChange = (event) => {
  Options.set('sortString', event.target.value);
  this.setState({ sortString: event.target.value });
}

filterBySearch = (products) => {
  const { searchTerm } = this.state;
  return products.filter(product =>
    [product.product, product.category].some(field => {
      const re = new RegExp(searchTerm, 'i');
      console.log('re is', re);
      return re.test(field);
    })
  );
}



render() {
  const products = this.state.products || [];
  const filterSearch = this.filterBySearch(products);

  return(
    <header className="navbar">
      <Link className="navbar-item" to="/"> <img className="logo" src = 'https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/cos_0.png'></img></Link>
      <Link className="navbar-item" to="/products">BROWSE</Link>
      {Auth.isAuthenticated() && Auth.getPayload().isAdmin &&<Link className="navbar-item" to="/products/new">ADD A PRODUCT</Link>}
      <WomensDropdown className="navbar-item"/>
      {/* <Link className="navbar-item" to="/products/filter/skirts">WOMENS</Link> */}
      <MensDropdown className="navbar-item"/>

      <div className="navbar-end">
        <div><SearchBar toggleSearch={this.state.toggleSearch} handleToggleSearch={this.handleToggleSearch} handleChange={this.handleSearchChange } searchTerm={ this.state.searchTerm } filterSearch={this.filterBySearch}/>
          {this.state.searchTerm && <FilterSelect products={filterSearch}/>}
        </div>
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">SIGN UP</Link>}
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">LOGIN</Link>}
        {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>LOG OUT {Auth.currentUsername()}</a>}
      </div>
    </header>

  );
}
}

export default withRouter(Header);
