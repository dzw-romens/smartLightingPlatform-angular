/**
 * Created by adu on 2018/6/26.
 */
const helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts', // 运行Angular时所需的一些标准js
    'vendor': './src/vendor.ts', // Angular、Lodash、bootstrap.css......
    'app': './src/main.ts' // 应用代码
  },
  resolve: { // 解析模块路径时的配置
    extensions: ['.ts', '.js'] // 制定模块的后缀，在引入模块时就会自动补全
  },
  devtool: 'source-map',
  module: {
    rules: [ // 告诉webpack每一类文件需要使用什么加载器来处理
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader','angular2-load-children-loader']
        //awesome-typescript-loader - 一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导
        //angular2-template-loader - 用于加载Angular组件的模板和样式
      },
      //  {
      //   test: require.resolve('jquery'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'jQuery'
      //   }]
      // },
       {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader'
      }, {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
       {
        test: /\.less$/,
        use: [
          'to-string-loader',
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          'less-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
        //html - 为组件模板准备的加载器
      }, {
        test: /\.(jpg|png|gif)$/,
        use: "file-loader"
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&minetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    //热替换
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
      //多个html共用一个js文件，提取公共代码
    }),
    // 提取 CSS 到单独的文件中
    new ExtractTextPlugin('app.bundle.css'),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html'
      // 自动向目标.html文件注入script和link标签
    })
  ]
};
