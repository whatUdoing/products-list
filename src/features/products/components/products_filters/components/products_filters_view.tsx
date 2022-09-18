import { FILTERS_RENDERING_STRATEGIES_MAP } from '../render_strategies/filters_rendering_strategies_map';
import React from 'react';
import { IProductsFiltersViewProps } from './products_filters_view_types';

export const ProductsFiltersView: React.FC<IProductsFiltersViewProps> = ({ filters, onChange }) => {
    return (
        <section className="products-filters">
            {filters.map((filter, index) => {
                const Component = FILTERS_RENDERING_STRATEGIES_MAP[filter.type];

                return (
                    <div
                        key={index}
                        className="products-filters__filter-control"
                    >
                        <Component
                            filter={filter}
                            onChange={onChange}
                        />
                    </div>
                );
            })}
        </section>
    );
};
