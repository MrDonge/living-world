const express = require('express')
const router = express.Router()

// 密码加密模块
const sha1 = require('sha1');

const UserModel = require('../models/user')

router.post('/', (req, res, next) => {

    let { account, password, rePassword } = req.body

    try {
        if (!account) {
            throw new Error('没有账号')
        }
        if (!password) {
            throw new Error('没有密码')
        }
        if (password !== rePassword) {
            throw new Error('密码不一致')
        }
    } catch (e) {
        res.json({
            code: -1,
            message: e.message
        })
    }

    // const joinData = new Date()

    // 明文密码加密
    password = sha1(password)

    // 写入数据库的用户信息
    const user = {
        name: '',
        account,
        password,
        gender: '',
        birthday: '',
        avatar: '',
        describe: '',
        joinDate: '',
        bgPhoto: ''
    }

    UserModel.create(user).then(result => {

        result = JSON.parse(JSON.stringify(result))
        delete result.password
        req.session.user = result

        res.json({
            code: 0,
            result,
            message: ""
        })

    }).catch(next)

})

module.exports = router
