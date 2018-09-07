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
  handleDelete = (event) => {
    console.log('------>', event.target.getAttribute('productid'));
    axios.delete(`/api/products/${event.target.getAttribute('productid')}`)
      .then(() => this.props.history.replace('/products'));
  }
  render() {
    return(
      <div className="columns is-multiline">
        { this.state.products.map(product =>
          <div className="column is-3" key={product._id}>
            <button productid={product._id} className="delete" onClick={this.handleDelete}></button>
            <Link to={`/products/${product._id}`}>
              <h3 className="title is-3">{product.product}</h3>
              <img src={ product.primaryImgUrl }/>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ProductsIndex;
