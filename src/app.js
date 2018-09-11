import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import 'bulma/css/bulma.css';
import './scss/style.scss';


// components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsIndex from './components/products/Index';
import ProductsShow from './components/products/Show';
import ProductsEdit from './components/products/Edit';
import ProductsNew from './components/products/New';

//authorization
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';


class App extends React.Component {
  render(){
    return (
      <main>
        <Header/>
        <Switch>
          <Route exact path="/register" component={AuthRegister} />
          <Route exact path="/login" component={AuthLogin} />
          <Route exact path="/products" component={ProductsIndex} />
          <Route path="/products/:id/edit" component={ProductsEdit}/>
          <Route exact path="/products/new" component={ProductsNew}/>
          <Route path="/products/filter/:searchTerm" component={ProductsIndex}/>
          <Route path="/products/:id" component={ProductsShow}/>
          <Route exact path="/" component={Home}/>
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
