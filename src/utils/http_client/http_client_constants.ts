export const HTTP_REQUEST_METHODS = {
    get: 'get',
    post: 'post',
} as const;

export const HTTP_REQUEST_MODE = {
    cors: 'cors',
    noCors: 'no-cors',
} as const;

export const DEFAULT_FETCH_OPTIONS = {
    method: HTTP_REQUEST_METHODS.get,
    mode: HTTP_REQUEST_MODE.cors,
};
