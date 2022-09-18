import { ProductsFilters } from '../../../../models/products_filters/products_filters_types';
import { Observable } from 'rxjs';
import { SelectedProductsFilters } from '../../store/products_store';

export interface IProductsFiltersRepository {
    setFilters(filters: ProductsFilters[]): void;

    selectFilters$(): Observable<ProductsFilters[]>;

    updateSelectedFilter(newFilters: SelectedProductsFilters): void;
}
