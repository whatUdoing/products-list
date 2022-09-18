import { Store } from '../../../../utils/state_manager/store';
import { ProductsStore, SelectedProductsFilters } from '../../store/products_store';
import { ProductsRepository } from '../../repository/products/products_repository';
import { PRODUCTS_FILTERS_SERVICE_NAME } from './products_filters_constants';
import { IProductsFiltersService, ProductsFiltersServiceConstructorOptions } from './products_filters_service_types';
import { IProductsHttpApi } from '../../http_api/products_http_api_types';
import { ProductsFiltersRepository } from '../../repository/products_filters/products_filters_repository';
import { Observable } from 'rxjs';
import { ProductsFilters } from '../../../../models/products_filters/products_filters_types';

export class ProductsFiltersService implements IProductsFiltersService {
    public serviceName = PRODUCTS_FILTERS_SERVICE_NAME;

    #store: Store<ProductsStore>;
    #httpApi: IProductsHttpApi;
    #productsRepository: ProductsRepository;
    #productsFiltersRepository: ProductsFiltersRepository;

    constructor({
        store,
        httpApi,
        productsRepository,
        productsFiltersRepository,
    }: ProductsFiltersServiceConstructorOptions) {
        this.#store = store;
        this.#httpApi = httpApi;
        this.#productsRepository = productsRepository;
        this.#productsFiltersRepository = productsFiltersRepository;

        this._fetchProductsFilters();
    }

    private async _fetchProductsFilters(): Promise<void> {
        const filters = await this.#httpApi.getProductsFilters();

        this.#productsFiltersRepository.setFilters(filters);
    }

    public selectFilters$(): Observable<ProductsFilters[]> {
        return this.#productsFiltersRepository.selectFilters$();
    }

    public setFilters(filters: ProductsFilters[]): void {
        this.#productsFiltersRepository.setFilters(filters);
    }

    public updateSelectedFilter(newFilters: SelectedProductsFilters): void {
        this.#productsFiltersRepository.updateSelectedFilter(newFilters);
    }
}