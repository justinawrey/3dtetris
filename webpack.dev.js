const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge.smart(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
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
                use: ["eslint-loader", "prettier-loader"]
            }
        ]
    },
})