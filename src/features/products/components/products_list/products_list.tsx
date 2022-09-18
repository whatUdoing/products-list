import React from 'react';
import {ProductsFilters} from '../products_filters/products_filters';
import {useProductsFiltersApi} from '../hooks/use_products_filters_api';
import {ProductsListView} from './products_list_view';
import {useProductsApi} from '../hooks/use_products_api';
import {LoadMore} from '../load_more';
import {usePaginationApi} from '../hooks/use_pagination_api';
import {useObservable} from '../../../../utils/hooks/use_obsevable/use_observable';

export const ProductsList = () => {
    const {filters} = useProductsFiltersApi();
    const {products} = useProductsApi();
    const {paginationService} = usePaginationApi();

    return (
        <div>
            total products {useObservable(paginationService.selectTotal$())}
            currently loaded {useObservable(paginationService.selectCurrentLoaded$())}
            {filters?.length && <ProductsFilters filters={filters}/>}
            {products?.length && <ProductsListView products={products}/>}
            {paginationService.allLoaded() ? 'All loaded' : <LoadMore/>}
        </div>
    );
};