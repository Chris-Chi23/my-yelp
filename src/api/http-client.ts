import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
/*
declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}
*/
const HEADER_AUTHORIZATION = 'Bearer U2mA2FMIph5L9mlcoYOPRV2gmq6oJu8O03vp92rZIohdiIkZyV2F55a4PQtWxot4p8oN-jR2uKehF94AlSwUF0wWIji4hy3D85stJTg_S3hh6_YmgE0jUt3b2Pn_XnYx';

export default abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        });
        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }

    private _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleRequestError
        );
    };

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleResponseError
        );
    };

    private _handleRequest = (config: AxiosRequestConfig) => {
        config.headers['Authorization'] = HEADER_AUTHORIZATION;
        return config;
    };

    private _handleResponse = (r: AxiosResponse) => {
        console.log('inside interceptor');
        console.log(r);
        return r.data;
    };

    protected _handleRequestError = (error: any) => Promise.reject(error);

    protected _handleResponseError = (error: AxiosError) => {
        console.log('inside handleresponseerror');

        console.log(error);
        return Promise.reject(error);
    };
}