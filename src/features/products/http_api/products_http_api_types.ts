import { ProductsSelectFilter } from '../../../models/products_filters/products_select_filter';
import { Product } from '../../../models/product/product';

export interface IProductsHttpApi {
    getProducts(params?: Record<string, any>): Promise<TProductsList>;

    getProductsFilters(): Promise<ProductsSelectFilter[]>;
}

export type TProductsList = {
    products: Product[];
    total: number;
};