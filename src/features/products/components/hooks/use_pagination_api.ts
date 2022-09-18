import { app } from '../../../../index';
import { PRODUCTS_PAGINATION_SERVICE_NAME } from '../../products_constants';
import { IProductsPaginationService } from '../../products_types';

interface IUsePaginationApi {
    paginationService: IProductsPaginationService;
}

export const usePaginationApi = (): IUsePaginationApi => {
    return {
        paginationService: app.getService<IProductsPaginationService>(PRODUCTS_PAGINATION_SERVICE_NAME),
    };
};
