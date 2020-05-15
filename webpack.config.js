const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
// var locals = {
//   routes: [
//     '/',
//   ]
// };

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles_bundle.css',
        }),
        // new StaticSiteGeneratorPlugin('main', locals.routes),
    ],
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                  ],
                exclude: /node_modules/
              }
        ]
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}