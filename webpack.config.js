var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: "./deps",
    output: {
        path: __dirname + "/public",
        publicPath: "../",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version")
            },
            // Optionally extract stylus files
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version!stylus-loader")
            },
            // Operate with images
            {
                test: /\.(png|jpg|svg)$/,
                loader: "file?name=[path][name].[ext]"
            },
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("css/bundle.css")
    ]
}
