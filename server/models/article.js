const Article = require('../lib/mongo').Article

module.exports = {

    // 发表文章
    create(article) {
        return Article.create(article)
    },

    // 根据文章 ID 获取文章
    getArticleById(articleId) {
        return Article.findOne({ _id: articleId }).exec()
    }
}
