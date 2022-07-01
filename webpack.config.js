const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require('brotli-webpack-plugin')


module.exports = {
    entry: {
        main: './src/index.js',
        menu: './src/menu.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map', 

    plugins:
     [
         
    ],
}