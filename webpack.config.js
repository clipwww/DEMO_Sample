var path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css']
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file'
            }
        ]
    },
    vue: {
        loaders: {
            scss: ['vue-style-loader', 'css', 'sass'].join('!')
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}