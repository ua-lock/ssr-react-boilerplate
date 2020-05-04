const path = require('path'),
  nodeExternals = require('webpack-node-externals'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  // Stylesheets
  {
    mode: 'development',
    entry: {
      style: './views/main.css',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.bundle.css',
        chunkFilename: '[id]_chunk.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
  },
]
