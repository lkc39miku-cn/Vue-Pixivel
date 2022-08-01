import {AxiosRequestConfig, AxiosResponse} from "axios"

interface AxiosInterceptors<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (response: T) => T
    responseInterceptorCatch?: (error: any) => any
}

interface AxiosConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: AxiosInterceptors<T>
}

export type {AxiosInterceptors, AxiosConfig}