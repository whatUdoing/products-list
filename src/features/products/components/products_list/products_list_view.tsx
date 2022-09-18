import React from 'react';
import { IProductsListViewProps } from './products_list_types';

export const ProductsListView: React.FC<IProductsListViewProps> = ({ products }) => {
    return (
        <ul>
            {products.map(({ id, title }) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    );
};
