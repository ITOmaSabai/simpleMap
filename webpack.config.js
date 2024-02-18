const path    = require("path")
const webpack = require("webpack")
require('dotenv').config(); // 環境変数を読み込む

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFormat: "module",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    new webpack.DefinePlugin({
      'process.env.GOOGLE_MAP_API_KEY': JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .jsと.jsxファイルに適用
        exclude: /node_modules/, // node_modules内のファイルは除外
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // ES6+とReactのコードをトランスパイル
          }
        }
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx'], // .jsと.jsxの拡張子を解析できるようにする
  }
}
