import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sorter from '../common/Sorter';
import Options from '../../lib/Options';
import _ from 'lodash';
import Auth from '../../lib/Auth';




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
      const endSearch = this.state.searchTerm.split('&');
      console.log('endSearch is', endSearch);
      console.log('products is', products);
      return products.filter(product =>
        product.category.toLowerCase() === endSearch[1].toLowerCase()
        && product.gender === endSearch[0].toLowerCase()
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
    // const filteredMens = this.filterProductsMens(sorted);
    // const filteredWomens = this.filterProductsWomens(sorted);

    // const filteredByGender = this.filterByOptions(sorted);
    // const filteredByGenderAndSearch = this.filterBySearch(filteredByGender);

    return(
      <section className = "columns is-centered">
        <main className="column is-10 has-text-centered">
          <div className="column is-12">
            <Link to="/products/filter/womens&jeans">
              <level className="columns">
                <div className="column is-4 has-text-left indexLeft indexPara">
                  <h2 className="title is-2">The jeans guide</h2>
                  <p>
All our styles in one place, with an array of washes to choose from. Find a new everyday favourite.</p></div>
                <div className="column is-8">
                  <img className="indexImage" src='https://lp.cosstores.com/app001prod?set=source[01_0648659_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]'/>

                  <img className="indexImage" src='https://lp.cosstores.com/app001prod?set=source[01_0648659_001_100],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]'/></div>

              </level>
            </Link>
            <level>
              <Sorter
                defaultValue={this.state.sortString}
                options={this.state.sortOptions}
                handleChange={this.handleSortChange}/>
              <div className="columns is-multiline">
                { filtered.map(product =>
                  <div className="column is-4" key={product._id}>
                    {Auth.isAuthenticated() && Auth.getPayload().isAdmin &&  <button productid={product._id} className="delete" onClick={this.handleDelete}></button>}
                    <Link to={`/products/${product._id}`}>
                      <img src={ product.primaryImgUrl }/>
                      <div className="columns">
                        <div className="column is-6"><p>{product.product}</p></div>
                        <div className="column is-6 has-text-right">  <p> £{product.price}</p></div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </level>
          </div>
        </main>
      </section>
    );
  }
}

export default ProductsIndex;
