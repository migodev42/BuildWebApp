const express = require('express')
const path=require('path')
// const proxy = require('http-proxy-middleware')
const dirname=path.resolve(__dirname,'dist');
/*const options = {
    target: "http://localhost:8080",
    changeOrigin:true,
}

const apiProxy = proxy(options)*/

const app = express()

app.use(express.static(dirname))
//app.use('/', apiProxy)
app.listen(80,'0.0.0.0')
console.log('nodeJs server 已经启动');