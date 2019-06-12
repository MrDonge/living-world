const Comment = require('../lib/mongo').Comment

module.exports = {

    // 添加评论
    create(comment) {
        return Comment.create(comment)
    },

    // 根据评论 id 获取评论
    getCommentById(commentId) {
        return Comment.findOne({ _id: commentId }).exec()
    },

    // 根据文章 id 获取全部评论
    getComments(articleId) {
        return Comment.find({ articleId }).populate({ path: 'user', model: "User" }).sort({ _id: 1 }).exec()
    },

    // 根据评论 id 更新评论信息
    updateCommentFileds(commentId, fileds) {
        return Comment.updateOne({ _id: commentId }, { $set: fileds })
    },
}
