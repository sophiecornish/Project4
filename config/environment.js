const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/Cos';
const secret = process.env.SECRET || 'secret';
const port = process.env.PORT || 4000;

module.exports = {
  dbURI, secret, port 
};
