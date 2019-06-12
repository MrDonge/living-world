import request from '../utils/request'
import { comment } from 'postcss';

// 添加評論
export const createComment = (params) => {
    return request({
        url: "/comment/create",
        method: "POST",
        data: params
    })
}

// 評論點讚
export const changeCommentLike = (commentId) => {
    return request({
        url: `/comment/isLike`,
        method: "GET",
        params: { commentId }
    })
}
