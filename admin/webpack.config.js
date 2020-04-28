let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let root = process.cwd();

// 压缩css插件
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

let {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'production',

    resolve: {
        extensions: ['.js', '.es', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            '@': path.join(root, './src')
        }
    },

    entry: './src/main.js',
    
    output: {
        path: path.join(root, '../server'),
        filename: './static/admin/[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(root, './src'),
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            extractCss: true
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader   ,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(ttf|woff)$/,
                use: [ 'url-loader' ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './views/admin.html'
        }),
        new VueLoaderPlugin(),

        // 拆分样式
        new MiniCssExtractPlugin({
            filename: './static/admin/style.css'
        }),

        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()

    ],
    // 打包库文件
    optimization: {
        splitChunks: {
            cacheGroups: {
                lib: {
                    name: 'lib',
                    test: /node-modules/,
                    chunks: 'initial'
                }
            }
        }
    }
}

