const path = require('path'),
  nodeExternals = require('webpack-node-externals')

module.exports = [
  // Backend
  {
    mode: 'development',
    entry: {
      server: './server.js',
    },
    output: {
      filename: 'server.bundle.js',
      path: path.join(__dirname, '/dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [],
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: false,
      __filename: false,
    },
  },
  // Frontend
  {
    mode: 'development',
    entry: {
      app: './views/index.js',
    },
    output: {
      filename: 'app.bundle.js',
      path: path.join(__dirname, '/dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
]
