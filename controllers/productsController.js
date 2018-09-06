const Product = require('../models/product');

function productsIndex(req, res, next) {
  Product.find()
    .then(products => res.json(products))
    .catch(next);
}


module.exports =  {
  index: productsIndex

};
