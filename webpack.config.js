const path = require('path')

module.exports = {
  watch: false,
  target: 'electron-renderer',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: 'build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
