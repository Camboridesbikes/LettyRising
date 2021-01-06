const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/
                ],
                use: ['babel-loader']
            },
            {
                test:/\.(ts|tsx)$/,
                exclude: [
                    /node_modules/
                ],
                use: 'ts-loader'
            },
            {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false
                }
            },
            {
                test: /\.(css)$/i,
                use: [
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify")
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};
