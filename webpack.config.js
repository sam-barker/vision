const path = require('path')

const reactConfig = {
  watch: false,
  target: 'electron-renderer',
  entry: './src/react/index.js',
  output: {
    path: path.join(__dirname, '/build/react'),
    publicPath: 'build/react',
    filename: 'index.js'
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

module.exports = [
  reactConfig
]
