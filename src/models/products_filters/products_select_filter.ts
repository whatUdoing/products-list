import { PRODUCTS_FILTERS_TYPES } from './products_filters_constants';
import { ProductsFiltersConstructorOptions } from './products_filters_types';

export class ProductsSelectFilter {
    name: string;
    type = PRODUCTS_FILTERS_TYPES.select;
    options: string[];

    constructor({ name, options }: ProductsFiltersConstructorOptions) {
        this.name = name;
        this.options = options;
    }
}
