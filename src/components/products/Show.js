import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class ProductsShow extends React.Component {
  state = {
    product: []
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => this.setState({product: res.data}));
  }
  render() {
    const product = this.state.product;
    return(
      <section>
        {product &&
          <div className="has-text-centered">
            {/* MAIN SECTION */}
            <h2 className="title is-2">{product.product}</h2>
            {product.colour && <h3 className="subtitle is-3"> {product.price}</h3>}
            <img src={product.imgUrl}></img>
            <p> {product.description}</p>
            {Auth.isAuthenticated() && Auth.getPayload().isAdmin &&   <div className="column is-half">
              <Link to={`/products/${product._id}/edit`} className="button is-rounded">Edit</Link>
            </div>
            }
          </div>
        }
      </section>
    );
  }
}

export default ProductsShow;
