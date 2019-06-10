module.exports = app => {

    // 设置允许跨域访问该服务.
    app.all('*', function (req, res, next) {
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Headers', 'Content-Type,token');
        }
        // 解决无法读取 session 问题
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');  // 此项不能为 “*”
        res.header('Access-Control-Allow-Credentials', true)

        res.header('Access-Control-Allow-Headers:content-type,token');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next();
    });

    // 注册
    app.use('/register', require('./signup'))
    // 登录
    app.use('/login', require('./signin'))
    // 发表文章
    app.use('/article', require('./article'))
}
