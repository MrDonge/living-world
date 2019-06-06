const express = require('express')

const router = express.Router()

const checkToken = require('../middlewares/verify')
const ArticleModel = require('../models/article')

router.post('/', checkToken, (req, res, next) => {

    const author = req.session.user._id
    const { title, content } = req.body

    try {
        if (!title) {
            throw new Error('标题不能为空')
        }
        if (!content) {
            throw new Error('内容不能为空')
        }
    } catch (e) {
        res.json({
            code: -1,
            message: e.message,
            result: ""
        })
    }

    const article = { author, title, content }

    ArticleModel.create(article).then(result => {
        if (!result) {
            res.json({
                code: 1,
                message: "创建文章失败",
                result: ""
            })
        } else {
            res.json({
                code: 0,
                message: "success",
                result: ""
            })
        }
    }).catch(next)

})

module.exports = router
