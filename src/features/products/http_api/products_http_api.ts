import { IHttpClient } from '../../../utils/http_client/http_client_types';
import { HTTP_API_PREFIX } from '../../../core/app_config';
import { IProductsHttpApi, TProductsList } from './products_http_api_types';
import { ProductsSelectFilter } from '../../../models/products_filters/products_select_filter';
import { PRODUCTS_FILTERS_TYPES } from '../../../models/products_filters/products_filters_constants';
import { Product } from '../../../models/product/product';

export class ProductsHttpApi implements IProductsHttpApi {
    #httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
        this.#httpClient = httpClient;
    }

    public async getProducts(params?: Record<string, any>): Promise<TProductsList> {
        const { pendingRequest } = this.#httpClient.fetch<Product[]>(`${HTTP_API_PREFIX}/products`, {
            params,
        });

        const { data: products, headers } = await pendingRequest;

        return {
            products: products.map((product) => new Product(product)),
            total: headers.has('X-Total-Count') ? Number(headers.get('X-Total-Count')) : 0,
        };
    }

    public async getProductsFilters(): Promise<ProductsSelectFilter[]> {
        const { pendingRequest } = this.#httpClient.fetch<ProductsSelectFilter[]>(`${HTTP_API_PREFIX}/filters`);

        const { data: filters } = await pendingRequest;

        return filters.map((filter) => {
            switch (filter.type) {
                case PRODUCTS_FILTERS_TYPES.select:
                    return new ProductsSelectFilter(filter);
            }
        });
    }
}
