var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // The standard entry point and output config
    entry: {
        bundle: "./app/deps"
    },
    output: {
        filename: "public/js/[name].js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version!stylus-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("public/css/bundle.css")
    ],
    resolve: {
        alias: {
            jquery: "jquery/dist/jquery"
        }
    }
}
