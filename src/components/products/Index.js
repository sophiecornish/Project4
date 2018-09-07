import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ProductsIndex extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get('/api/products')
      .then(res => this.setState({products: res.data }));
  }
  render() {
    return(
      <div className="columns is-multiline">
        { this.state.products.map(product =>
          <Link to={`/products/${product._id}`} key={product._id}
            className="column is-3 card">
            <h3 className="title is-3">{product.product}</h3>
            <img src={ product.primaryImgUrl }/>
          </Link>
        )}
      </div>
    );
  }
}

export default ProductsIndex;
