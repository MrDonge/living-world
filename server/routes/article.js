const express = require('express')

const router = express.Router()

const checkToken = require('../middlewares/verify')
const ArticleModel = require('../models/article')


/**
 * 创建文章
 */
router.post('/create', checkToken, (req, res, next) => {

    const { _id, account } = req.session.user
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

    const article = { userId: _id, author: account, title, content }

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


/**
 * 文章列表
 */
router.post('/list', (req, res, next) => {
    ArticleModel.getArticleList().then(result => {
        if (!result) {
            res.json({
                code: 1,
                message: "error",
                result: ""
            })
        } else {
            res.json({
                code: 0,
                message: "success",
                result
            })
        }
    }).catch(next)
})

/**
 * 文章详情
 */
router.get('/detail/:articleId', checkToken, (req, res, next) => {

    const { articleId } = req.params

    if (!articleId) {
        res.json({
            code: -1,
            message: '没有ID！'
        })
        return false
    } else {
        Promise.all([
            ArticleModel.getArticleById(articleId),
            ArticleModel.incPv(articleId)
        ]).then(result => {
            res.json({
                code: 0,
                result: result[0],
                message: 'success'
            })
        })
    }


})


module.exports = router
