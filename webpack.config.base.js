const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'adc',
            template: './src/assets/index.html',
        }),
    ],
};