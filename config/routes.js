const express = require('express');
const Router = express.Router();

const productsController = require('../controllers/productsController');

Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

Router.route('/products')
  .get(productsController.index)
  .post(productsController.create);

Router.route('/products/:id')
  .get(productsController.show)
  .put(productsController.update)
  .delete(productsController.delete);


module.exports = Router;
