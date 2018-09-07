const mongoose = require( 'mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean}
});

// Throw a ValidationError when duplicated emails are attempted/created
userSchema.plugin(require('mongoose-unique-validator'));

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 8);
    next();
  }
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
