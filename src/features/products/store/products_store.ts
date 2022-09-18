import { Store } from '../../../utils/state_manager/store';
import { Product } from '../../../models/product/product';
import { ProductsFilters } from '../../../models/products_filters/products_filters_types';

const DEFAULT_STORE = {
    products: [],
    productsFilters: [],
    selectedFilters: null,
};

export const createProductsStore = (initialStore = DEFAULT_STORE) => {
    return new Store<ProductsStore>(initialStore);
};

export type SelectedProductsFilters = Record<string, string>;

export type ProductsStore = {
    products: Product[];
    productsFilters: ProductsFilters[];
    selectedFilters: SelectedProductsFilters | null;
};