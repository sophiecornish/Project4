const Transaction = require('../models/transactions');

function transactionsIndex(req, res, next) {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(next);
}

function transactionsUpdate(req, res, next) {
  Transaction.findById(req.params.id)
    .then(transaction => transaction.set(req.body))
    .then(transaction => transaction.save())
    .then(transaction => res.json(transaction))
    .catch(next);
}

function transactionsCreate(req, res, next) {
  console.log('req.body is', req.body);
  Transaction.create(req.body)
    .then(transaction => res.json(transaction))
    .catch(next);
}

function transactionsDelete(req, res, next) {
  Transaction.findById(req.params.id)
    .then(transaction => transaction.remove())
    .then(() => res.sendStatus(204)) // NO CONTENT
    .catch(next);
}


module.exports =  {
  index: transactionsIndex,
  create: transactionsCreate,
  update: transactionsUpdate,
  delete: transactionsDelete
};
