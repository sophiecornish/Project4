const Product = require('../models/product');

function productsIndex(req, res, next) {
  Product.find()
    .then(products => res.json(products))
    .catch(next);
}

function productsShow(req, res, next) {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next);
}

function productsUpdate(req, res, next) {
  console.log('req.params.id is', req.params.id);
  Product.findById(req.params.id)
    .then(product => {
      console.log('----->',  product);
      product.set(req.body);
      return product;
    })
    .then(product => product.save())
    .then(product => res.json(product))
    .catch(next);
}

function productsCreate(req, res, next) {
  console.log('req.body is', req.body);
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);
}

function productsDelete(req, res, next) {
  console.log('req.params.id is', req.params.id);
  Product.findById(req.params.id)
    .then(product => product.remove())
    .then(() => Product.find())
    .then(products => res.json(products))
    .catch(next);
}



module.exports =  {
  index: productsIndex,
  create: productsCreate,
  show: productsShow,
  update: productsUpdate,
  delete: productsDelete
};
