import axios, {AxiosInstance} from 'axios'
import {AxiosConfig, AxiosInterceptors} from './type'

class Axios {
    instance: AxiosInstance
    interceptors?: AxiosInterceptors

    constructor(config: AxiosConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        this.instance.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        this.instance.interceptors.response.use(
            (response) => {
                return response.data
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    request<T>(config: AxiosConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }

            this.instance
                .request<any, T>(config)
                .then((response) => {
                    if (config.interceptors?.responseInterceptor) {
                        response = config.interceptors.responseInterceptor(response)
                    }
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    get<T>(config: AxiosConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'GET'
        })
    }

    post<T>(config: AxiosConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'POST'
        })
    }

    put<T>(config: AxiosConfig<T>): Promise<T> {
        return this.request({
            ...config,
            method: 'PUT'
        })
    }

    delete<T>(config: AxiosConfig<T>): Promise<T> {
        return this.request({
            ...config,
            method: 'DELETE'
        })
    }
}

export default Axios