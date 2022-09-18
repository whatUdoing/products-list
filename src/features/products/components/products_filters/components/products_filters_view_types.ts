import { ProductsFilters } from '../../../../../models/products_filters/products_filters_types';
import { ProductFilterChangedUpdateObject } from '../products_filters_types';

export interface IProductsFiltersViewProps {
    filters: ProductsFilters[];
    onChange: (updateObject: ProductFilterChangedUpdateObject) => void;
}