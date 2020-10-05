const webpack = require("webpack");
//const nodeExternals = require("webpack-node-externals");
const path = require("path");
// const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const css = {
  test: /\.scss$/,
//   loader: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
};

// webpack.config.js
const serverConfig = {
  name: "server",
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
  },
//   externals: [nodeExternals()],
  entry: {
    server: path.resolve(__dirname, "./src/server/index.js"),
  },
//   plugins: [
//     new MiniCSSExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),
//   ],
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

// webpack.config.js
const clientConfig = {
  name: "client",  
  mode: "development",
  target: "web",
  entry: {
    app: path.resolve(__dirname, "./src/client/index.js"),
    //search: path.resolve(__dirname, "./src/client/search.js"),
  },
//   plugins: [
//     new MiniCSSExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),
//   ],
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = [serverConfig, clientConfig];