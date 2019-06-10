import request from '../utils/request'

/**
 * 创建文章
 */
export const createArticle = (params) => {
    return request({
        url: "/article/create",
        method: "POST",
        data: params
    })
}

/**
 * 文章列表
 */
export const articleList = params => {
    return request({
        url: "/article/list",
        method: "POST",
        data: params
    })
}

/**
 * 根据 ID 获取文章
 */
export const getArticleById = articleId => {
    return request({
        url: "article/detail/" + articleId,
        method: "GET",
        params: articleId
    })
}
