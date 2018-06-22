'use strict';
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const basePath = path.join(__dirname, '../');
const config = require('../package.json');

let webpackConfig = require('./webpack.base.config.js');

module.exports = function (env) {
    let myDevConfig = webpackConfig;
    myDevConfig.devtool = 'source-map';
    myDevConfig.output = {
        path: path.join(basePath, 'build'),
        library: 'CacheBustedLoaderPlugin',
        libraryTarget: 'umd',
        filename: config.config.name + '.min.js',
    };
    myDevConfig.module.rules = myDevConfig.module.rules.concat([
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: ['/node_modules/', '/build/'],
            }
        ]
    );
    let date = (new Date()).toISOString().split('T')[0];
    myDevConfig.plugins = myDevConfig.plugins.concat([
            new webpack.DefinePlugin({
                    'DEBUG': false,
                    'version': JSON.stringify(config.version)
                }
            ),
            new CleanWebpackPlugin([path.join(basePath, 'build')], {
                    root: basePath
                }
            ),
            new webpack.BannerPlugin(
                config.name + ' - version ' + config.version + '\n' +
                config.description + '\n' +
                '\n' +
                config.author + '\n' +
                'Build at ' + date + '\n' +
                'Released under MIT License \n'
            )
        ]
    );
    return myDevConfig;
};