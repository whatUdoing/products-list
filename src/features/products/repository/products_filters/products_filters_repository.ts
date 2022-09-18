import { Store } from '../../../../utils/state_manager/store';
import { ProductsStore, SelectedProductsFilters } from '../../store/products_store';
import { IProductsFiltersRepository } from './products_filters_repository_types';
import { Observable } from 'rxjs';
import { ProductsFilters } from '../../../../models/products_filters/products_filters_types';

export class ProductsFiltersRepository implements IProductsFiltersRepository {
    #store: Store<ProductsStore>;

    constructor(store: Store<ProductsStore>) {
        this.#store = store;
    }

    public selectFilters$(): Observable<ProductsFilters[]> {
        return this.#store.select('productsFilters');
    }

    public setFilters(filters: ProductsFilters[]): void {
        this.#store.update({
            productsFilters: filters,
        });
    }

    public updateSelectedFilter(newFilters: SelectedProductsFilters): void {
        this.#store.update((currState: ProductsStore) => {
            return {
                selectedFilters: {
                    ...(currState.selectedFilters ?? {}),
                    ...newFilters,
                },
            };
        });
    }
}