### webpack打包目标

- [x] `react`
- [x] `babel` 编译loader ( `jsx`、`ES6/7/8`兼容 )
- [x] devServer 开发服务器 
- [x] HotReplace 热替换
- [x] resolve.alias 项目路径定制(`Modeul resolution`)
- [x] `Less loader` 
- [x] `code split` 代码切分
- [x] `HtmlWebpackPlugin`  定制动态生成Html文件  `HtmlWebpackPlugin`为4.0.0-beta.5版本，3.2稳定版还不支持多入口的Html注入
- [X] `Muitiple Entry` 多入口
- [x] `antd` 支持
- [x] 编译前clean `dist`目录(可选)
- [x] `compress`代码编译压缩
- [x] `sourceMap` 代码映射
- [ ] `bundle` 构成分析
- [ ] `css`分离
- [ ] `output` 输出定制 (文件名/引入依赖自动注入)
- [ ] `import()` 按需加载
- [ ] `mode` 编译模式配置 ( `development/production` ) 不同开发环境的编译配置
```
// dev 环境不使用代码压缩，加速编译

// prod 环境使用代码压缩，生成sourceMap
``` 
- [ ] 静态文件`loader` (图片/音频)
