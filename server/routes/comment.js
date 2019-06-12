const express = require('express')
const router = express.Router()

const CommentModel = require('../models/comment')
const ArticleModel = require('../models/article')
const UserModel = require('../models/user')

const checkToken = require('../middlewares/verify')

router.post('/create', checkToken, (req, res, next) => {

    const user = req.session.user._id
    const { articleId, content } = req.body

    try {
        if (!articleId) {
            throw new Error('文章不存在')
        }
        if (!content) {
            throw new Error('内容为空')
        }
    } catch (e) {
        return res.json({
            code: -1,
            message: e.message,
            result: ""
        })
    }

    let comment = { articleId, user, content }

    CommentModel.create(comment).then(result => {
        res.json({
            code: 0,
            message: 'success',
            result
        })
    }).catch(next)

})

// 评论点赞
router.get('/isLike', checkToken, (req, res, next) => {

    const { commentId } = req.query

    try {
        if (!commentId) {
            throw new Error('沒有評論id')
        }
    } catch (e) {
        res.json({
            code: -1,
            message: e.message,
            result: ""
        })
    }

    // 找到要点赞的文档
    CommentModel.getCommentById(commentId).then(comment => {

        // 定义要更新的字段集合
        let fileds = {}

        let likesUserArr = comment.likesUser.length ? comment.likesUser : []

        // 将点赞用户添加到点赞的用户列表
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
                    comment.likes -= 1

                } else {

                    comment.likes += 1
                    likesUserArr.push(newLikesUser)

                }

            } else {

                comment.likes += 1
                likesUserArr.push(newLikesUser)

            }

            // 将要修改的字段保存传递到 model
            fileds.likes = comment.likes
            fileds.likesUser = likesUserArr

            CommentModel.updateCommentFileds(commentId, fileds).then(result => {

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
