# Vscode三步配置调试多进程NodeJS

### 安装
```
npm i typescripy
npm i ts-node
```

### 配置
- tsconfig.json 配置  

```json
tsc --init  
{  
    "compilerOptions": {  
        "module": "commonjs",  
        "target": "es5",  
        "noImplicitAny": true,  
        "outDir": "./dist",  
        "sourceMap": true  
    },  
    "include": [  
        "src/**/*"  
    ]  
} 
```  
- ctrl + shift + B 选择构建ts 或者 监视ts改动

### 运行调试  
1 debugger 断点  
2 F5运行

### 编译

编译 `tsc`
> tsc会自动找到目录中的tsconfig.json进行编译

运行编译后的项目

```
node .\dist\index.js
```
