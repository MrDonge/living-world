import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://easy-mock.com/mock/5cef9a8f9ffe6536b286e49f/mobile-blog',
    timeout: 1000
})

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance
