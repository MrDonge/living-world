import request from '../utils/request'

export const getBlogList = () => {
    return request({
        url: "/list",
        method: "POST"
    })
}
