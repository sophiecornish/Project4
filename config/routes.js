const express = require('express');
const Router = express.Router();

const productsController = require('../controllers/productsController');
const authController = require('../controllers/authController');
const transactionsController = require('../controllers/transactionsController');

// HOME
Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });


// AUTH
Router.route('/login')
  .post(authController.login);

Router.route('/register')
  .post(authController.register);


// PRODUCTS
Router.route('/products')
  .get(productsController.index)
  .post(productsController.create);

Router.route('/products/:id')
  .get(productsController.show)
  .put(productsController.update)
  .delete(productsController.delete);

// TRANSACTIONS

Router.route('/transactions')
  .get(transactionsController.index)
  .post(transactionsController.create);

Router.route('/transactions/:id')
  .put(transactionsController.update)
  .delete(transactionsController.delete);



module.exports = Router;
