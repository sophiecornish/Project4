import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// styling
import 'bulma/css/bulma.css';
import './scss/style.scss';


// components
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsIndex from './components/products/Index';


class App extends React.Component {
  render(){
    return (
      <main>
        <Header/>
        <Route exact path="/products" component={ProductsIndex} />
        <Footer/>


      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
