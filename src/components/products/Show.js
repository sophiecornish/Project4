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
      .then(res => this.setState({product: res.data}, ()=> {
        console.log(this.state.product.imgUrl);
      }));
  }
  render() {
    const product = this.state.product;
    return(
      <section>
        {product &&
          <div className="columns has-text-centered">
            {product.imgUrl &&
            <div className="column is-2 is-multiline">
              {product.imgUrl.map((imgUrl, index) =>
                <div className="zoom" key={index}><img src={imgUrl}/></div>
              )}
            </div>
            }
            <div className="column is-4"><img className="zoom" src={product.primaryImgUrl}></img> </div>
            {Auth.isAuthenticated() && Auth.getPayload().isAdmin &&   <div className="column is-half">
              <Link to={`/products/${product._id}/edit`} className="button is-rounded">Edit</Link>
            </div>
            }
            <div className="column is-6 has-text-left showText"><h6 className="title is-6">{product.product}</h6>
              {product.colour && <div>
                <h3 className="subtitle is-3"> £{product.price}</h3>
                <h6 className="subtitle is-6"> Colour</h6>
                <h6 className="subtitle is-6 colourBox"> {product.colour}</h6>
                <div className="colourBox" style={{backgroundColor: product.colourHex}}></div>
              </div>
              }
              <p className="showPara"> {product.description}</p>
              <button className="showButton">add to basket</button>
            </div>
          </div>
        }
      </section>
    );
  }
}

export default ProductsShow;
