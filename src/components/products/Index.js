import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sorter from '../common/Sorter';
import Options from '../../lib/Options';
import _ from 'lodash';

import FilterSideBar from '../common/FilterSidebar';


class ProductsIndex extends React.Component {
  state = {
    products: [],
    sortString: Options.get('sortString') || 'price|desc',
    sortOptions: [
      { value: 'price|asc', label: 'Lowest Price'},
      { value: 'price|desc', label: 'Highest Price'}
    ],
    filterOptions: [
      { label: 'Men\'s', value: 'Men\'s', active: true },
      { label: 'Women\'s', value: 'Women\'s', active: true },
      {label: 'Dresses', value: 'Dresses', active: true},
      {label: 'Knitwear', value: 'Knitwear', active: true},
      {label: 'Coats and Jackets', value: 'Coats and Jackets', active: true},
      {label: 'Trousers', value: 'Trousers', active: true},
      {label: 'Tops', value: 'Tops', active: true},
      {label: 'Tshirts', value: 'Tshirts', active: true},
      {label: 'Skirts', value: 'Skirts', active: true},
      {label: 'Knitwear', value: 'Knitwear', active: true},
      {label: 'Coats and Jackets', value: 'Coats and Jackets', active: true},
      {label: 'Trousers', value: 'Trousers', active: true}

    ]
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get('/api/products')
      .then(res => this.setState({products: res.data }));
  }

  sortProducts = (products) => {
    const [ fieldName, direction ] = this.state.sortString.split('|');
    return _.orderBy(products, fieldName, direction);
  }

  handleSortChange = (event) => {
    Options.set('sortString', event.target.value);
    this.setState({ sortString: event.target.value });
  }


  handleDelete = (event) => {
    console.log('------>', event.target.getAttribute('productid'));
    axios.delete(`/api/products/${event.target.getAttribute('productid')}`)
      .then(res => this.setState({ products: res.data }));
  }

  filterByOptions = (products) => {
    console.log('products is (on arrival)', products);
    console.log('products after function is', products.filter(product =>
      this.state.filterOptions.some(option => {
        return option.active && product.gender;
      })
    ));
    return products.filter(product =>
      this.state.filterOptions.some(option => {
        return option.active && product.gender;
      })
    );
  }

  toggleSidebar = () => {
    const showSideBar = !this.state.showSideBar;
    this.setState({ showSideBar });
  }

  handleFilterOptionChange = (event) => {
    const filterOptions = this.state.filterOptions.slice();
    console.log('FILTER OPTIONS -->', filterOptions);
    filterOptions.forEach(option => {
      if(option.value === event.target.name) {
        option.active = event.target.checked;
      }
    });
    this.setState({ filterOptions });
  }

  handleSelectAll = (event) => {
    const filterOptions = this.state.filterOptions.slice();
    // Set the 'active' of every filterOption
    filterOptions.forEach(option => {
      option.active = event.target.checked;
    });
    this.setState({ filterOptions });
  }



  render() {
    const products = this.state.products || [];
    const sorted = this.sortProducts(products);
    // const filteredByGender = this.filterByOptions(sorted);
    // const filteredByGenderAndSearch = this.filterBySearch(filteredByGender);

    return(
      <section className = "columns">
        {this.state.showSideBar &&
      <aside className="column is-2">
        <FilterSideBar options={this.state.filterOptions}
          handleChange={this.handleFilterOptionChange}
          handleSelectAll={this.handleSelectAll}
        />
      </aside>
        }
        <div className="column"
          style={{maxWidth: 60, backgroundColor: 'black', zIndex: 2}}
          onClick={this.toggleSidebar}
        ></div>
        <main className={'column ' + this.state.showSideBar ? 'is-10' : 'is-12'}>
          <div className="column is-12">
            <Sorter
              defaultValue={this.state.sortString}
              options={this.state.sortOptions}
              handleChange={this.handleSortChange}/>
            <div className="columns is-multiline">
              { sorted.map(product =>
                <div className="column is-3" key={product._id}>
                  <button productid={product._id} className="delete" onClick={this.handleDelete}></button>
                  <Link to={`/products/${product._id}`}>
                    <h3 className="title is-3">{product.product}</h3>
                    <img src={ product.primaryImgUrl }/>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default ProductsIndex;
