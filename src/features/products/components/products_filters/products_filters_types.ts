import { ProductsFilters } from '../../../../models/products_filters/products_filters_types';

export interface IProductsFiltersProps {
    filters: ProductsFilters[];
}

export interface IProductFilter {
    filter: ProductsFilters;
    onChange: (updateObject: ProductFilterChangedUpdateObject) => void;
}

export type ProductFilterChangedUpdateObject = {
    name: string;
    value: string;
};