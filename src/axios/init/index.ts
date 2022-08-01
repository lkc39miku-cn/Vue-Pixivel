import {axiosKey} from "../key/key"
import Axios from "../main/axios"

export const axios_sm = new Axios({
    baseURL: axiosKey.dev,
    timeout: 5000,
    interceptors: {
        requestInterceptor: (config) => {
            return config
        },
        requestInterceptorCatch(error) {
            return error
        },
        responseInterceptor(response) {
            return response
        },
        responseInterceptorCatch(error) {
            return error
        },
    }
})

export const axios_xs = new Axios({
    baseURL: axiosKey.dev,
    timeout: 5000
})