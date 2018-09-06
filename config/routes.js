const express = require('express');
const Router = express.Router();

const productsController = require('../controllers/productsController');

Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

Router.route('/products')
  .get(productsController.index);


module.exports = Router;
