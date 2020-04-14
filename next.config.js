const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: {
    APY_KEY: process.env.APY_KEY,
  },
}