const path = require('path');
const webpack = require('webpack');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules')
        ]
    },
    entry: {
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'prop-types',
            'axios',
            'lodash.debounce',
            'lodash.pickby'
        ],
        app: ['./lib/renderers/dom.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
    ]
};

module.exports = config;