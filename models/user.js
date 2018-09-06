const mongoose = require( 'mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: Boolean
});

module.exports = mongoose.model('User', userSchema);
