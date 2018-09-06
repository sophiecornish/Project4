const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/Cos';
const secret = process.env.SECRET || 'secret';

module.exports = {
  dbURI, secret
};
