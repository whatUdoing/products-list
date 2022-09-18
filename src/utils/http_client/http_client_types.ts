import { HTTP_REQUEST_METHODS, HTTP_REQUEST_MODE } from './http_client_constants';
import { Any } from 'ts-toolbelt';

export interface IHttpClient {
    fetch<T>(url: string, options?: FetchOptions): FetchItem<T>;
}

export type FetchOptions = {
    method?: HttpMethod;
    mode?: HttpRequestMode;
    cacheOptions?: {
        cacheType: string;
        ttl: number;
    };
    params?: Record<string, any>;
};

export type FetchItem<T> = {
    pendingRequest: Promise<TResponseItem<T>>;
    cancel: any;
};

export type TResponseItem<T> = {
    data: T;
    headers: Headers;
};

export type HttpMethod = Any.Keys<typeof HTTP_REQUEST_METHODS>;

export type HttpRequestMode = typeof HTTP_REQUEST_MODE[keyof typeof HTTP_REQUEST_MODE];