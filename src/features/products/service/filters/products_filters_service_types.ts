import { Store } from '../../../../utils/state_manager/store';
import { ProductsStore, SelectedProductsFilters } from '../../store/products_store';
import { ProductsRepository } from '../../repository/products/products_repository';
import { IProductsHttpApi } from '../../http_api/products_http_api_types';
import { ProductsFiltersRepository } from '../../repository/products_filters/products_filters_repository';
import { ProductsFilters } from '../../../../models/products_filters/products_filters_types';
import { Observable } from 'rxjs';
import { IFeatureService } from '../../../../core/features_management/feature_management_types';

export type ProductsFiltersServiceConstructorOptions = {
    store: Store<ProductsStore>;
    productsRepository: ProductsRepository;
    productsFiltersRepository: ProductsFiltersRepository;
    httpApi: IProductsHttpApi;
};

export interface IProductsFiltersService extends IFeatureService {
    setFilters(filters: ProductsFilters[]): void;

    selectFilters$(): Observable<ProductsFilters[]>;

    updateSelectedFilter(newFilters: SelectedProductsFilters): void;
}