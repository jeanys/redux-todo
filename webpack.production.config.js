var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var os = require('os');

module.exports = {
    entry: {
        main: './index',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle-[chunkhash:6].js'
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
        new ExtractTextPlugin('[name]-[chunkhash:6].css', {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'common-[chunkhash:6].js'),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            workerCount: os.cpus().length,
            uglifyJS: {
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}