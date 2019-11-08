const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const marked = require('marked')
const mRender = new marked.Renderer()



/* css分离 */
// 创建多个实例
// const extractCSS = new ExtractTextPlugin('[name]-one.css');
// const extractLESS = new ExtractTextPlugin('[name]-two.css');
// if (process.env.NODE_ENV !== 'production') {
//   console.log('非生产环境');
// }else{
//   console.log('生产环境');
// }

module.exports = function (webpackEnv) {
    console.log('webpack mode:', process.env.NODE_ENV);
    // const NODE_ENV = process.env.NODE_ENV;
    const isProduction = (process.env.NODE_ENV === 'production') ? true : false;
    const setSourceMap = isProduction ? 'cheap-source-map' : 'cheap-module-eval-source-map';
    const useCompress = isProduction ? true : false;
    const entry = {
        index: path.resolve(__dirname, "./src/index.js"),                            // 每个entry中包含 @babel/poolyfill 以支持ES最新语法
        // index2: "./src/indexTestMultyEntry.js",
    }


    console.log('webpack : sourceMap配置', setSourceMap);
    function getProdPlugins() {
        const plugins = [];

        if (isProduction) {
            // 用于生产环境的 plugins

            // plugins.push(new UglifyJsPlugin({
            //   sourceMap: true,
            // }));

            plugins.push(new webpack.DefinePlugin({                                    //指定生产环境 可以降低bundle构建大小
                'process.env.NODE_ENV': JSON.stringify('production')
            }))
        }

        console.log(plugins)
        return plugins
    }



    /* 多 entry  polyfill */
    function polyFillEntries() {
        console.log('webpack : 开始生成entry');
        const polyFilledEntry = {};
        Object.keys(entry).forEach(key => {
            polyFilledEntry[key] = ["@babel/polyfill", entry[key]]
        })
        return polyFilledEntry
    }

    /* html 自动注入 bundle */
    function setHtmlWebpackPlugin() {
        console.log('webpack : 开始注入html', entry);
        const htmlWebpackPlugins = [];
        Object.keys(entry).forEach(key => {
            htmlWebpackPlugins.push(new HtmlWebpackPlugin({
                title: 'HtmlWebpackPlugin' + key,                              // 名称
                chunks: [key],                                              // 对应entry里面的key
                template: path.resolve(__dirname, './public/index.html'),   // 待注入的 html模板文件
                filename: `${key}.html`,                                    // 输出注入后的的 html文件名, key对应 entry中设置的key
                inject: 'body'
            }))
        })
        return htmlWebpackPlugins;
    }

    return {
        entry: polyFillEntries(),
        mode: isProduction ? "production" : "development",
        module: {
            rules: [
                // jsx 解析
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },

                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]

                },

                // Less 解析
                {
                    test: /\.less$/,
                    exclude: /\.module\.less$/,
                    use: ["style-loader", "css-loader", { loader: "less-loader", options: { javascriptEnabled: true } }] //适配 antd的online JavaScript
                },

                // 图片/文件 loader
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },

                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'raw-loader'
                        },
                    ]
                },

                {
                    test: /\.(woff|woff2|eot|otf|ttf)$/,
                    use: 'file-loader'
                }

            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"],
            alias: {
                "@src": path.resolve(__dirname, './src'),
                "@pages": path.resolve(__dirname, './src/pages'),
                "@assets": path.resolve(__dirname, './src/assets'),
                "@components": path.resolve(__dirname, './src/components'),
                "@routers": path.resolve(__dirname, './src/routers')
            }
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            // publicPath: "/dist/",                 
            publicPath: '/',                     // 服务器 serve bundle路径 The bundled files will be available in the browser under this path.
            filename: "[name].bundle.[hash:4].js",
            chunkFilename: '[name].bundle.js',

            // Point sourcemap entries to original disk location (format as URL on Windows)
            // devtoolModuleFilenameTemplate: info =>
            // path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
        },
        devServer: {
            // lazy: true,              
            historyApiFallback: true,
            // 加载某个页面 才进行编译
            compress: useCompress,                                              // 代码压缩
            open: false,                                                  // 自动打开浏览器
            hot: true,
            contentBase: path.resolve(__dirname, "./public"),            // 配置请求路径 此时访问 http://localhost:3000/ 实际为 http://localhost:3000/dist，默认为项目根目录
            staticOptions: {
                redirect: true
            },
            port: 3007,
            // publicPath: "http://localhost:3000/public",                        // 虚拟服务器 serve 路径
            // hotOnly: true
        },
        plugins: [
            ...setHtmlWebpackPlugin(),                                    // 编译时自动根据HTML模板 注入编译的JS bundle
            ...getProdPlugins(),                                          //  生成生产环境需要的 plugins
            new CleanWebpackPlugin(),                                    // 每次编译时清除 dist
            // new BundleAnalyzerPlugin()

        ],
        devtool: setSourceMap,
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
}