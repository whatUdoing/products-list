import { useObservable } from '../../../../utils/hooks/use_obsevable/use_observable';
import { app } from '../../../../index';
import { PRODUCTS_FILTERS_SERVICE_NAME } from '../../service/filters/products_filters_constants';
import { IProductsFiltersService } from '../../service/filters/products_filters_service_types';
import { ProductsSelectFilter } from '../../../../models/products_filters/products_select_filter';

interface IUserProductsFiltersApi {
    filters: ProductsSelectFilter[] | undefined;
    productsFiltersService: IProductsFiltersService;
}

export const useProductsFiltersApi = (): IUserProductsFiltersApi => {
    const productsFiltersService = app.getService<IProductsFiltersService>(PRODUCTS_FILTERS_SERVICE_NAME);

    return {
        filters: useObservable(productsFiltersService.selectFilters$()),
        productsFiltersService: productsFiltersService,
    };
};
