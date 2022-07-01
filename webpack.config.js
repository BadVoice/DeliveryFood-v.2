const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require('brotli-webpack-plugin')


module.exports = (env, argv) => {
    return {
        entry: {
            main: './src/index.js',
            menu: './src/menu.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: argv.mode === "production" ? 'source-map' : 'eval-source-map',

        plugins:
        [

        ],
    }
}
