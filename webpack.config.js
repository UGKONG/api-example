const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': __dirname + '/src/',
      '@modules': __dirname + '/modules/',
      '@public': __dirname + '/public/',
      '@pages': __dirname + '/src/pages',
    }
  },
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build/front',
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /.(png|jpg|gif|svg)$/, use: ['file-loader'] },
      { test: /.(c|sa|sc)ss$/, use: ['style-loader','css-loader','sass-loader'] },
      { test: /.html$/, use: ['html-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    open: true
  }
}