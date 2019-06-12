const mongoose = require('mongoose')
const Schema = mongoose.Schema

const config = require('../config/default')

mongoose.connect(config.mongodb, { useNewUrlParser: true })


/**
 * 用户表
 */

const user = new Schema({
    name: String,
    account: String,
    password: String,
    rePassword: String,
    gender: String,
    birthday: String,
    avatar: String,
    describe: String,
    joinDate: String,
    bgPhoto: String
}, {
        versionKey: false
    })

/**
 * 文章
 */

const article = new Schema({
    title: String,
    content: String,
    userId: mongoose.Types.ObjectId,
    author: { type: String, required: true, validate: /\S+/ },
    meta: {
        pv: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        comments: { type: Number, default: 0 }
    },
    likesUser: [
        {
            id: mongoose.Types.ObjectId,
            account: String,
            avatar: String
        }
    ]
}, {
        versionKey: false
    })


/**
 * 评论
 */

const comment = new Schema({
    // 评论所在文章 id
    articleId: { type: mongoose.Types.ObjectId },
    // 评论者的信息
    userId: { type: mongoose.Types.ObjectId },
    user: { type: mongoose.Types.ObjectId },
    content: String,
    // 被赞数
    likes: { type: Number, default: 0 },
    likesUser: [
        {
            id: mongoose.Types.ObjectId,
            account: String,
            avatar: String
        }
    ]
}, {
        versionKey: false
    })


exports.User = mongoose.model('User', user)
exports.Article = mongoose.model('Artilce', article)
exports.Comment = mongoose.model('Comment', comment)
