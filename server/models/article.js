const Article = require('../lib/mongo').Article

module.exports = {

    // 发表文章
    create(article) {
        return Article.create(article)
    },

    // 文章列表
    getArticleList() {
        return Article.find().sort({ _id: -1 }).exec()
    },

    // 根据文章 ID 获取文章
    getArticleById(articleId) {
        return Article.findOne({ _id: articleId }).exec()
    },

    // 根据文章 id 给 pv 加 1
    incPv(articleId) {
        return Article
            .updateOne({ _id: articleId }, { $inc: { 'meta.pv': 1 } })
            .exec()
    },


    // 根据文章 id 更新文章信息
    updateArticleFileds(articleId, fileds) {
        return Article.updateOne({ _id: articleId }, { $set: fileds })
    },


}
