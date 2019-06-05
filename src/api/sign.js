import request from '../utils/request'


// 注册
export const userRegister = params => {
    return request({
        url: "/register",
        method: "POST",
        data: params
    })
}

// 登录
export const userLogin = params => {
    return request({
        url: "/login",
        method: "POST",
        data: params
    })
}
