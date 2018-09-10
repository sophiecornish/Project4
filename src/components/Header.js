import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import SearchBar from './common/SearchBar';

import axios from 'axios';
import Options from '../lib/Options';
import FilterSideBar from './common/FilterSidebar';
import FilterSelect from './common/FilterSelect';


class Header extends React.Component {
  state = {
    products: []
  }

    handleLogout = () => {
      Auth.removeToken();
      this.props.history.push('/');
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
      <section className = "columns">


        <main className={'column ' + this.state.showSideBar ? 'is-10' : 'is-12'}>
          <header className="navbar">
            <Link className="navbar-item" to="/">HOME</Link>
            <Link className="navbar-item" to="/products">BROWSE</Link>
            <Link className="navbar-item" to="/products/new">ADD A PRODUCT</Link>
            <Link className="navbar-item" to="/products/filter/skirts">WOMENS</Link>
            <Link className="navbar-item" to="/products">MENS</Link>

            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">SIGN UP</Link>}
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">LOGIN</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>LOG OUT {Auth.currentUsername()}</a>}
            <div className="column is-4"><SearchBar handleChange={this.handleSearchChange } searchTerm={ this.state.searchTerm } filterSearch={this.filterBySearch}/>
              {this.state.searchTerm && <FilterSelect products={filterSearch}/>}
            </div>
          </header>
        </main>
      </section>
    );
  }
}

export default withRouter(Header);
