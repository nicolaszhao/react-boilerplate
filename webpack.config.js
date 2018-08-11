const path = require('path');
const cheese = require('webpack-config-cheese');
const { name, description } = require('./package.json');

module.exports = cheese.buildConfig({
  spa: false,
  libChunks: ['react', 'react-dom']
});
