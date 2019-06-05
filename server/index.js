const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const config = require('./config/default')
const routes = require('./routes')

const app = express()


app.use(bodyParser.json()); // 使用bodyparder中间件，
app.use(bodyParser.urlencoded({ extended: true }));


// 使用 session 中间件
app.use(session({
    // 设置 Cookie 中保存 session id 的字段名称
    name: config.session.key,
    // 对 session id 相关的 cookie 进行签名
    secret: 'sercet',
    // 强制更新 session
    resave: true,
    // 设置为 false,强制创建一个 session,即使用户未登录
    saveUninitialized: false,
    // session 过期时间
    cookie: {
        maxAge: config.maxAge
    },
    // 将 session 存储到数据库
    store: new MongoStore({
        url: config.mongodb
    })
}))

// 挂载路由
routes(app)

app.listen(config.port, function () {
    console.log(`server running at ${config.port} port`)
})
