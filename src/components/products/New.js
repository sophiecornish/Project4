import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';

//COMPONENTS
import ProductForm from './Form';


class ProductsNew extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', this.state);
    axios.post('/api/products', this.state)
      .then(() => this.props.history.push('/products'));
  }

  handleChange = ({target: {name, value} }) => {
    console.log('handle change is called', name, value);
    // const { name, value } = event.target
    this.setState({ [name]: value });
  }



  render() {
    return (
      <section>
        <h2 className="title is-2">Create a new Product</h2>
        <ProductForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          product={this.state}
        />
      </section>
    );
  }
}

export default ProductsNew;
