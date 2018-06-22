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
        ]
    );
    return myDevConfig;
};