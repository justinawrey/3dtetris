const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: { app: "./src/index.js" },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({ title: "3D Tetris" }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader", "prettier-loader"]
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
