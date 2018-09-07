import React from 'react';
import axios from 'axios';


//COMPONENTS
import ProductForm from './Form';



class ProductsEdit extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    const productId = this.props.match.params.id;
    console.log('Form submitted', this.state);
    axios.put(`/api/products/${productId}`, this.state)
      .then(() => this.props.history.push(`/products/${productId}`));
  }

  handleChange = ({target: {name, value} }) => {
    console.log('handle change is called', name, value);
    // const { name, value } = event.target
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }


  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-2">THE EDIT PAGE</h2>
        <ProductForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          product={this.state}
        />
      </section>
    );
  }
}

export default ProductsEdit;
