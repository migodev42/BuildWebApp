const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* css分离 */
// 创建多个实例
// const extractCSS = new ExtractTextPlugin('[name]-one.css');
// const extractLESS = new ExtractTextPlugin('[name]-two.css');
// if (process.env.NODE_ENV !== 'production') {
//   console.log('非生产环境');
// }else{
//   console.log('生产环境');
// }

module.exports = function(webpackEnv){
  console.log('webpack mode:',webpackEnv);
  return {
    entry: {
      index1: ["@babel/polyfill", "./src/index.js"],                            // 每个entry中包含 @babel/poolyfill 以支持ES最新语法
      index2: ["@babel/polyfill", "./src/index2.js"],
    },
    mode: "development",
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
  
          /* css分离 */
          // test: /\.css$/,
          // use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
        }, {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: ["style-loader", "css-loader", { loader: "less-loader", options: { javascriptEnabled: true } }] //适配 antd的online JavaScript
  
          /* less分离 */
          // test: /\.less$/i,
          // use: extractLESS.extract([ 'css-loader', "less-loader"])
          
        }
  
        // Less 解析
  
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: {
        "@src": path.resolve(__dirname, './src'),
        "@pages": path.resolve(__dirname, './src/pages')
      }
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      // publicPath: "/dist/",                                      // 服务器 serve bundle路径 The bundled files will be available in the browser under this path.
      filename: "[name].[hash:8].js",
    },
    devServer: {
      // lazy: true,                                                 // 加载某个页面 才进行编译
      compress: true,                                              // 代码压缩
      open: true,                                                  // 自动打开浏览器
      hot: true,
      contentBase: path.resolve(__dirname, "public/"),            // 配置请求路径 此时访问 http://localhost:3000/ 实际为 http://localhost:3000/dist，默认为项目根目录
      port: 3000,
      // publicPath: "http://localhost:3000/public",                        // 虚拟服务器 serve 路径
      // hotOnly: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'htmlwebpackplugin',                                // 名称
        chunks: ['index1'],                                        // 对应entry里面的key
        template: path.resolve(__dirname, './public/index.html'),  // 待注入的 html模板文件
        filename: 'index.html',                                    // 输出注入后的的 html文件名
        inject: 'body'
      }),                                                         // 需要在hot fix热替换模块之前
  
      new HtmlWebpackPlugin({
        title: 'htmlwebpackplugin2',                                // 名称
        chunks: ['index2'],                                        // 对应entry里面的key
        template: path.resolve(__dirname, './public/index.html'),  // 待注入的 html模板文件
        filename: 'index2.html',                                    // 输出注入后的的 html文件名
        inject: 'body'
      }),                                                         // 需要在hot fix热替换模块之前
      // new webpack.HotModuleReplacementPlugin()
      new CleanWebpackPlugin(),                                    // 每次编译时清除 dist
      // new CompressionPlugin()                                     //webpack 代码压缩
      new UglifyJsPlugin({
        sourceMap: true,
      }),
      new webpack.DefinePlugin({                                    //指定生产环境 可以降低构建量
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
  
    ],
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}