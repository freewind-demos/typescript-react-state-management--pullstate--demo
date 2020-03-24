const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const babelConfig = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', {
        targets: {browsers: ['last 2 versions', 'IE 11']}
      }],
      '@babel/preset-react',
    ],
  }
};

module.exports = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        babelConfig
      ],
      exclude : [
        /\bcore-js\b/,
        /\bwebpack\/buildin\b/
      ]
    }, {
      test: /\.tsx?$/,
      use: [
        babelConfig,
        {loader: 'ts-loader'}
      ],
      exclude : [
        /\bcore-js\b/,
        /\bwebpack\/buildin\b/
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    host: '0.0.0.0'
  }
}
