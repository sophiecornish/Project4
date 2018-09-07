import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import 'bulma/css/bulma.css';
import './scss/style.scss';


// components
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsIndex from './components/products/Index';
import ProductsShow from './components/products/Show';


class App extends React.Component {
  render(){
    return (
      <main>
        <Header/>
        <Switch>
          <Route exact path="/products" component={ProductsIndex} />
          <Route path="/products/:id" component={ProductsShow}/>
        </Switch>
        <Footer/>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
