module.exports = process.env.NODE_ENV ==="production"? require('./config/webpack.pro.js'): require('./config/webpack.dev.js');
