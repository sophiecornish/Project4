const Product = require('../models/product');

function productsIndex(req, res, next) {
  Product.find()
    .then(products => res.json(products))
    .catch(next);
}

function productsShow(req, res, next) {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next)
}

function productsCreate(req, res, next) {
  console.log('req.body is', req.body);
  Product.create(req.body)
    .then(film => res.json(film))
    .catch(next);
}


module.exports =  {
  index: productsIndex,
  create: productsCreate,
  show: productsShow
};
