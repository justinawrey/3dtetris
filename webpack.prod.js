const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '3D Tetris',
      jsExtension: '.gz'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
			test: /\.(js|css|html|svg)$/,
    }),
    new HtmlWebpackChangeAssetsExtensionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
})
