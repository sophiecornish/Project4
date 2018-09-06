const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product: {type: String, required: true},
  category: {type: String, required: true},
  price: Number,
  colour: String,
  colourHex: String,
  gender: { enum: ['women\'s', 'men\'s']},
  description: String,
  primaryImgUrl: String,
  imgUrl: [{ type: String  }],
  quantityAvailable: Number
});

module.exports = mongoose.model('Product', productSchema);
