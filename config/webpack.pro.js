/**
 * Created by adu on 2018/6/26.
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  output   : {
    path      : helpers.root('dist'),
    publicPath: '/',
    filename  : '[name].js'
  },
  devServer: {
    port              : 8080,
    historyApiFallback: true //使用HTML5历史记录API，使index.html代替404响应页面
  }
});
