import React from 'react';
import { IProductsFiltersProps, ProductFilterChangedUpdateObject } from './products_filters_types';
import { ProductsFiltersView } from './components/products_filters_view';
import { useProductsFiltersApi } from '../hooks/use_products_filters_api';

export const ProductsFilters: React.FC<IProductsFiltersProps> = ({ filters }: IProductsFiltersProps) => {
    const { productsFiltersService } = useProductsFiltersApi();

    const handleFiltersChanged = ({ name, value }: ProductFilterChangedUpdateObject) => {
        productsFiltersService.updateSelectedFilter({
            [name]: value,
        });
    };

    return (
        <ProductsFiltersView
            filters={filters}
            onChange={handleFiltersChanged}
        />
    );
};
