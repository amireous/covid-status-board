const path = require('path');
const HtmlWebpackPlugin =
    require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const webpackConfig = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.[contenthash].html',
        favicon: './src/img/apple-touch-icon.png'
    })],
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
}

module.exports = webpackConfig