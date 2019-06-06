const express = require('express')

const router = express.Router()

// 密码加密模块
const sha1 = require('sha1');

// 引入 JWT 生成 token
const jwt = require('jsonwebtoken')

const UserModel = require('../models/user')

router.post('/', (req, res, next) => {

    const { account, password } = req.body

    // 校验前台参数
    try {
        if (!account) {
            throw new Error('用户名为空')
        }
        if (!password) {
            throw new Error('密码为空')
        }
    } catch (e) {
        res.json({
            code: -1,
            message: e.message,
            result: ""
        })
    }

    UserModel.getUserByAccount(account).then(result => {

        if (!result) {
            res.json({
                code: -1,
                result,
                message: "用户不存在"
            })
        } else {

            // 如果传过来的密码和数据库密码不一样
            if (sha1(password) !== result.password) {
                res.json({
                    code: -1,
                    result: '',
                    message: "用户名或密码错误"
                })
            } else {

                // 删除返给前台的密码信息
                result = JSON.parse(JSON.stringify(result))
                delete result.password

                // 根据用户账号和 ID 生成 token
                const token = jwt.sign({ id: result.id, account: result.account }, 'donge', { expiresIn: 3600 })

                req.session.user = result

                res.json({
                    code: 0,
                    message: "success",
                    result,
                    token
                })

            }
        }

    }).catch(next)

})

module.exports = router
