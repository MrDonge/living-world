const jwt = require('jsonwebtoken')


module.exports = function (req, res, next) {

    const token = req.headers.token || req.params.token || req.body.token || req.query.token

    // 解析 token
    if (token) {
        jwt.verify(token, 'donge', (err, data) => {
            if (err) {
                return res.json({
                    code: 1,
                    message: err.message || '无效的token！'
                })
            } else {
                req.userToken = data
                next()
            }
        })
    } else {
        return res.json({
            code: 1,
            message: "未登录"
        })
    }
}
