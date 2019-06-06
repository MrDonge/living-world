import request from '../utils/request'

export const createArticle = (params) => {
    return request({
        url: "/createArticle",
        method: "POST",
        data: params
    })
}
