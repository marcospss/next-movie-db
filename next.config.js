const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['fetch-data'] = path.join(__dirname, 'fetch-data');
    config.resolve.alias['models'] = path.join(__dirname, 'models');
    config.resolve.alias['services'] = path.join(__dirname, 'services');
    config.resolve.alias['settings'] = path.join(__dirname, 'settings');
    return config;
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
}