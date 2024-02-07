const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        chemSphere: "chemSphere@http://localhost:8081/remoteEntry.js",
      },
      shared: {
        ...packageJson.dependencies,
        "react-router-dom": {
          singleton: true, // This ensures a single instance is used
          requiredVersion: packageJson.dependencies["react-router-dom"], // Specify the required version
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
