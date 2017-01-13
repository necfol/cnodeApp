const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.less$/i,
          include: path.resolve(__dirname, 'src'),
          loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
              limit: 10000,
              name: '[name].[ext]?[hash]'
          }
      },
      {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'url',
          query: {
              limit: 10000,
              name: '[name].[ext]?[hash]'
          }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.jsx']
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
