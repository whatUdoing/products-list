import { PRODUCTS_SERVICE_NAME } from '../../service/products/products_service_constants';
import { IProductsService } from '../../service/products/products_service_types';
import { app } from '../../../../index';
import { useObservable } from '../../../../utils/hooks/use_obsevable/use_observable';
import { Product } from '../../../../models/product/product';

interface IUseProductsApi {
    products: Product[] | undefined;
}

export const useProductsApi = (): IUseProductsApi => {
    const productsService = app.getService<IProductsService>(PRODUCTS_SERVICE_NAME);

    return {
        products: useObservable(productsService.selectProducts$()),
    };
};