const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
};

const img = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

// webpack.config.js
const serverConfig = {
  name: "server",
  mode: "development",
  target: "node",
  node: {
    __dirname: true,
  },
  entry: {
    server: path.resolve(__dirname, "./src/server/index.js"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [js, css, img],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};

// webpack.config.js
const clientConfig = {
  name: "client",
  mode: "development",
  target: "web",
  entry: {
    app: path.resolve(__dirname, "./src/client/index.js"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [js, css, img],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};

module.exports = [serverConfig, clientConfig];
