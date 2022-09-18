import { BaseInitializer } from '../../core/features_management/base_initializer';
import { createProductsStore } from './store/products_store';
import { ProductsRepository } from './repository/products/products_repository';
import { ProductsService } from './service/products/products_service';
import { ProductsHttpApi } from './http_api/products_http_api';
import { HttpClient } from '../../utils/http_client/http_client';
import { ProductsFiltersService } from './service/filters/products_filters_service';
import { ProductsFiltersRepository } from './repository/products_filters/products_filters_repository';
import { IFeatureInitializer, IFeatureService } from '../../core/features_management/feature_management_types';
import { PaginationInitializer } from '../pagination/pagination_initializer';
import { PaginationService } from '../pagination/pagination_service';
import { PRODUCTS_PAGINATION_SERVICE_NAME } from './products_constants';

export class ProductsInitializer extends BaseInitializer implements IFeatureInitializer {
    public init(): IFeatureService[] {
        super.init();

        const store = createProductsStore();
        const [paginationService] = new PaginationInitializer().init({
            paginationServiceName: PRODUCTS_PAGINATION_SERVICE_NAME,
        });
        const productsRepository = new ProductsRepository(store);
        const productsFiltersRepository = new ProductsFiltersRepository(store);
        const productsHttpApi = new ProductsHttpApi(new HttpClient());
        const productsFiltersService = new ProductsFiltersService({
            store,
            productsRepository,
            productsFiltersRepository,
            httpApi: productsHttpApi,
        });
        const productsService = new ProductsService({
            store,
            paginationService: paginationService as PaginationService,
            productsRepository,
            httpApi: productsHttpApi,
        });

        return [productsService, productsFiltersService, paginationService];
    }
}
