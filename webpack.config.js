const path    = require("path")
const webpack = require("webpack")

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
