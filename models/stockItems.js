const mongoose = require( 'mongoose');

const stockItemsSchema = new mongoose.Schema({
  product: {type: mongoose.Schema.ObjectId, ref: 'Product'},
  colour: {type: mongoose.Schema.ObjectId, ref: 'Product'},
  size: { enum: ['xs', 's', 'm', 'l', 'xl'] },
  quantity: Number
});

module.exports = mongoose.model('StockItems', stockItemsSchema);
