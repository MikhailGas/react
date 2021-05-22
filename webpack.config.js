const path = require("path");
const webpack = require('webpack');

module.exports = {
    resolve:{
        modules: ['/static_src','/node_modules'],
        extensions:['.js', '.jsx']
    },
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
   mode: 'development',
   devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './static_src'),
    open: true,
    compress: true,
    hot: true,
    port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/env', '@babel/react'],
                },
                
            },
            
        ],
    },


};