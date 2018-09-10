import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sorter from '../common/Sorter';
import Options from '../../lib/Options';
import _ from 'lodash';




class ProductsIndex extends React.Component {
  state = {
    products: [],
    sortString: Options.get('sortString') || 'price|desc',
    sortOptions: [
      { value: 'price|asc', label: 'Lowest Price'},
      { value: 'price|desc', label: 'Highest Price'}
    ]
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => this.setState({products: res.data }));
  }

  componentDidUpdate() {
    console.log('searchTerm is', this.props.match.params.searchTerm);
    const searchTerm = this.props.match.params.searchTerm;
    if (this.state.searchTerm !== searchTerm) {
      this.setState({searchTerm: searchTerm });
    }
  }

  filterProducts(products) {
    if (this.state.searchTerm) {
      return products.filter(product =>
        product.category.toLowerCase() === this.state.searchTerm.toLowerCase()
        // && product.gender === 'Men\'s`'
      );
    } else {
      return products;
    }
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




  render() {
    const products = this.state.products || [];
    const sorted = this.sortProducts(products);
    const filtered = this.filterProducts(sorted);
    // const filteredByGender = this.filterByOptions(sorted);
    // const filteredByGenderAndSearch = this.filterBySearch(filteredByGender);

    return(
      <section className = "columns">
        <main className="column">
          <div className="column is-12">
            <Sorter
              defaultValue={this.state.sortString}
              options={this.state.sortOptions}
              handleChange={this.handleSortChange}/>
            <div className="columns is-multiline">
              { filtered.map(product =>
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
