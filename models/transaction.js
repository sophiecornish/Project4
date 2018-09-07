const mongoose = require( 'mongoose');

const transactionSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  product: {type: mongoose.Schema.ObjectId, ref: 'Product'},
  quantity: Number,
  date: Date,
  pricePaid: Number,
  completed: Boolean
});

module.exports = mongoose.model('Transaction', transactionSchema);
