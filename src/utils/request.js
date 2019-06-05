import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000
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
