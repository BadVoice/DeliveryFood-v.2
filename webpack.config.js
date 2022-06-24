const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        menu: './src/menu.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}