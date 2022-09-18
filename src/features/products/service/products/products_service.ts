import { IProductsService, ProductsServiceConstructorOptions } from './products_service_types';
import { ProductsStore } from '../../store/products_store';
import { ProductsRepository } from '../../repository/products/products_repository';
import { Store } from '../../../../utils/state_manager/store';
import { PRODUCTS_SERVICE_NAME } from './products_service_constants';
import { IProductsHttpApi } from '../../http_api/products_http_api_types';
import { Product } from '../../../../models/product/product';
import { combineLatestWith, from, Observable, switchMap } from 'rxjs';
import { IPaginationService } from '../../../pagination/pagination_types';

export class ProductsService implements IProductsService {
    public serviceName = PRODUCTS_SERVICE_NAME;

    #store: Store<ProductsStore>;
    #paginationService: IPaginationService;
    #httpApi: IProductsHttpApi;
    #productsRepository: ProductsRepository;

    constructor({ store, httpApi, productsRepository, paginationService }: ProductsServiceConstructorOptions) {
        this.#store = store;
        this.#httpApi = httpApi;
        this.#productsRepository = productsRepository;
        this.#paginationService = paginationService;

        this._setupFiltersListener();
    }

    private _setupFiltersListener(): void {
        const selectedFilters$ = this.#store.select('selectedFilters');

        selectedFilters$.subscribe(() => {
            this.#paginationService.resetPagination();
        });

        selectedFilters$
            .pipe(
                combineLatestWith(this.#paginationService.selectPage$()),
                switchMap(([selectedFilters, page]) => {
                    return from(
                        this.#httpApi.getProducts({
                            ...selectedFilters,
                            _page: page,
                        })
                    );
                })
            )
            .subscribe(({ products, total }) => {
                this.#productsRepository.setProducts(products);
                this.#paginationService.updatePagination((currState) => {
                    return {
                        total,
                        currentLoaded: currState.currentLoaded + products.length,
                    };
                });
            });
    }

    public removeProducts(): void {
        this.#productsRepository.removeProducts();
    }

    public selectProducts$(): Observable<Product[]> {
        return this.#productsRepository.selectProducts$();
    }

    public setProducts(products: Product[]): void {
        this.#productsRepository.setProducts(products);
    }
}
