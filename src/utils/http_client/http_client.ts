import { FetchItem, FetchOptions, IHttpClient, TResponseItem } from './http_client_types';
import { DEFAULT_FETCH_OPTIONS } from './http_client_constants';

export class HttpClient implements IHttpClient {
    constructor(/* todo cacheService: any*/) {}

    public fetch<T>(url: string, options: FetchOptions = {}): FetchItem<T> {
        const { method, mode, params } = {
            ...DEFAULT_FETCH_OPTIONS,
            ...options,
        };
        const controller = new AbortController();
        const signal = controller.signal;

        const requestUrl = params ? this._getUrlWithParams(url, params) : url;

        const pendingRequest = new Promise<TResponseItem<T>>((resolve, reject) => {
            (async () => {
                try {
                    const response = await fetch(requestUrl, {
                        method,
                        mode,
                        signal,
                    });

                    if (response.ok) {
                        const data = (await response.json()) as T;

                        resolve({
                            data,
                            headers: response.headers,
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            })();
        });

        return {
            pendingRequest,
            cancel: () => {
                controller.abort();
            },
        };
    }

    private _getUrlWithParams(url: string, params: Record<string, any>): string {
        return `${url}?${new URLSearchParams(params).toString()}`;
    }
}
