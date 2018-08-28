const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './app');

const rupture = require('rupture');
const autoprefixer = require('autoprefixer-stylus');

const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = (env = {}) => {

    const isLocal = env.ENV === 'local';

    console.log(`env = ${JSON.stringify(env)}`);

    const config = {
        entry: {
            polyfill: 'babel-polyfill',
            main: APP_DIR + '/index.jsx'
        },
        devtool: 'source-map',
        output: {
            path: BUILD_DIR,
            filename: `[name]${isLocal ? '' : '.[chunkhash]'}.js`,
            chunkFilename: `[name]${isLocal ? '' : '.[chunkhash]'}.js`,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    rupture(),
                                    autoprefixer()],
                            },
                        },
                    ],
                },
                {
                    test: /\.(jsx|js)$|/i,
                    include: APP_DIR,
                    exclude: [
                        //IMPORTANT: always include here any file types that are handled by other loaders/plugins
                        /(node_modules)/,
                        /\.styl$/,
                        /\.ejs$/
                    ],
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader?name=fonts/[name].[ext]'
                    }
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: [
                        {loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'},
                        {loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'}
                    ]
                }
            ],
        },
        //See "6. Feature Flags" in https://github.com/petehunt/webpack-howto
        plugins: [
            new webpack.DefinePlugin({
                'env': {
                    NODE_ENV: JSON.stringify(env.ENV)
                },
                __LOCAL__: JSON.stringify(env.CONFIG === "local" || false),
                __DEV__: JSON.stringify(env.CONFIG === "dev" || false),
                __TEST__: JSON.stringify(env.CONFIG === "test" || false),
                __PROD__: JSON.stringify(env.CONFIG === "prod" || false)
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor', // extracted vendor files
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest', // extracted manifest
                minChunks: Infinity,
            }),
            new webpack.HashedModuleIdsPlugin(),
            new WebpackChunkHash(),
            new ChunkManifestPlugin({
                filename: "chunk-manifest.json",
                manifestVariable: "webpackManifest"
            }),
            new HtmlWebpackPlugin({
                template: './app/index.ejs'
            }),
            new InlineManifestWebpackPlugin({
                name: 'webpackManifest'
            })
        ],

        //Don't think this works, see the README.md for more info
        watchOptions: {
            ignored: /node_modules/
        },
        devServer: {
            compress: true,
            port: 9000
        }
    };

    return config;
};