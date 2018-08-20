const zeroConfig = require('webpack-config-zero');
const path = require('path');

module.exports = zeroConfig({
  spa: false,
  include: {
    js: [

      // TODO: 该模块包需要用 rollup 构建成 es 模块
      path.resolve(__dirname, 'node_modules', 'tote-box')
      
    ]
  }
});
