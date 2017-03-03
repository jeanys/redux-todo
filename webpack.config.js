var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        './index'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css!sass')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.tmpl.html')
        }),
        new ExtractTextPlugin('main.css', {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        open: true,
        inline: true,
        hot: true
    }
}