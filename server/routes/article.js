const express = require('express')

const router = express.Router()

const checkToken = require('../middlewares/verify')
const ArticleModel = require('../models/article')
const UserModel = require('../models/user')


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
                code: -1,
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
                code: -1,
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

/**
 * 点赞取消赞
 */

router.get('/isLike', (req, res, next) => {
    const { articleId } = req.query

    // 找到点赞的文章
    ArticleModel.getArticleById(articleId).then(article => {

        // 定义要更新的字段集合
        let fileds = {}

        let likesUserArr = article.likesUser.length ? article.likesUser : []

        // 将当前用户添加到点赞的用户列表
        UserModel.getLikesUserById(req.session.user._id).then(user => {

            let newLikesUser = {}

            // 存储当前点赞用户信息
            newLikesUser.id = user._id
            newLikesUser.account = user.account
            newLikesUser.avatar = user.avatar

            /**
             * 如果点赞用户列表为空，则没人点赞，将当前用户添加到点赞用户列表
             * 如果点赞用户列表不为空，则查看点赞用户列表是否已存在该用户，存在则取消赞，否则点赞
             */
            if (likesUserArr.length) {

                // 返回点赞列表点过赞的人
                let likedUser = likesUserArr.find(item => item.account === newLikesUser.account)

                // 当前用户点过赞 点赞数减一并将该用户从已点赞列表去除
                if (likedUser) {

                    likesUserArr.map((item, index) => {

                        if (item.id === likedUser.id) {
                            likesUserArr.splice(index, 1)
                        }

                    })
                    article.meta.likes -= 1

                } else {

                    article.meta.likes += 1
                    likesUserArr.push(newLikesUser)

                }

            } else {

                article.meta.likes += 1
                likesUserArr.push(newLikesUser)

            }

            // 将要修改的字段保存传递到 model
            fileds.meta = article.meta
            fileds.likesUser = likesUserArr

            ArticleModel.updateArticleFileds(articleId, fileds).then(result => {

                if (result.ok) {
                    res.json({
                        code: 0,
                        message: 'success',
                        result
                    })
                } else {
                    res.json({
                        code: -1,
                        message: 'error message',
                        result: ""
                    })
                }

            })

        })

    }).catch(next)
})


module.exports = router
