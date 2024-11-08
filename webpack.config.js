const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './src/main.js',

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },


    devServer: {
        port: 3000,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin(),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    },
}