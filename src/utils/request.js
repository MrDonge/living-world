import axios from 'axios'
import { Toast } from 'antd-mobile'
import cookie from 'react-cookies'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000,
    /**
     * 超时请求方案：https://github.com/axios/axios/issues/164#issuecomment-327837467
     */
    retry: 3,
    retryDelay: 1500,
    withCredentials: true
})

instance.interceptors.request.use(
    config => {
        if (cookie.load('token')) {
            config.headers.token = cookie.load('token')
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if (response.data.code === -1) {
            Toast.fail(response.data.message || '请求失败')
        }
        if (response.data.code === 1) {
            window.location.href = '/login'
        }
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance
