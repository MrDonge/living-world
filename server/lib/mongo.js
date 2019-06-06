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
    author: mongoose.Types.ObjectId,
    pv: Number
}, {
        versionKey: false
    })


/**
 * 评论
 */

const comment = new Schema({
    author: mongoose.Types.ObjectId,
    content: String,
    articleId: mongoose.Types.ObjectId
}, {
        versionKey: false
    })


exports.User = mongoose.model('User', user)
exports.Article = mongoose.model('Artilce', article)
exports.Comment = mongoose.model('Comment', comment)
