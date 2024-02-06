const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "chemSphere",
      filename: "remoteEntry.js",
      exposes: {
        "./ChemSphereApp": "./src/bootstrap",
      },
      shared: require("../package.json").dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
