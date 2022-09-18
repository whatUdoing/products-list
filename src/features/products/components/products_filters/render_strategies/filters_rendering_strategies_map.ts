import { PRODUCTS_FILTERS_TYPES } from '../../../../../models/products_filters/products_filters_constants';
import { selectFilter } from './select_filter';
import { IProductFilter } from '../products_filters_types';
import { ProductFilterType } from '../../../../../models/products_filters/products_filters_types';
import React from 'react';

export const FILTERS_RENDERING_STRATEGIES_MAP: Record<ProductFilterType, React.FC<IProductFilter>> = {
    [PRODUCTS_FILTERS_TYPES.select]: selectFilter,
};