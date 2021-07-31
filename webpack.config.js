const path = require("path");
const webpack = require("webpack");

/** Can be used in filename key of output keys
 * [name]
 * [hash]
 * [chunkhash]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
  mode: "development",
  entry: ["./src/engine.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js",
    publicPath: "/",
    libraryTarget: "var", //var(default), amd, umd, commonjs,
  },
  devServer: {
    port: "9000",
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
