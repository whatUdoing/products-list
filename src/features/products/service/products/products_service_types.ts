import { ProductsStore } from '../../store/products_store';
import { ProductsRepository } from '../../repository/products/products_repository';
import { Store } from '../../../../utils/state_manager/store';
import { IProductsHttpApi } from '../../http_api/products_http_api_types';
import { Observable } from 'rxjs';
import { Product } from '../../../../models/product/product';
import { IFeatureService } from '../../../../core/features_management/feature_management_types';
import { PaginationService } from '../../../pagination/pagination_service';

export type ProductsServiceConstructorOptions = {
    store: Store<ProductsStore>;
    productsRepository: ProductsRepository;
    paginationService: PaginationService;
    httpApi: IProductsHttpApi;
};

export interface IProductsService extends IFeatureService {
    selectProducts$(): Observable<Product[]>;

    removeProducts(): void;

    setProducts(products: Product[]): void;
}