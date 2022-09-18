import { ProductsSelectFilter } from './products_select_filter';
import { PRODUCTS_FILTERS_TYPES } from './products_filters_constants';
import { Any } from 'ts-toolbelt';

export type ProductsFiltersConstructorOptions = {
    name: string;
    options: string[];
};

export type ProductsFilters = ProductsSelectFilter;

export type ProductFilterType = Any.Keys<typeof PRODUCTS_FILTERS_TYPES>;