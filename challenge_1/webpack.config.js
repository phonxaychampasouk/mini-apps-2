const path = require('path');
module.exports = {
    entry: {
        index: [ path.join(__dirname, 'client', 'index.jsx'), 'babel-polyfill' ]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx|js$/,
                exclude: /(node_modules)/,
                    loader: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development'
};