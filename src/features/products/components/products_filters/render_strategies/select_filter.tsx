import React, { ChangeEvent } from 'react';
import { IProductFilter } from '../products_filters_types';

export const selectFilter: React.FC<IProductFilter> = ({ filter, onChange }: IProductFilter) => {
    const { name, options } = filter;

    const handleFilterChange = ({ target }: ChangeEvent) => {
        const { name, value } = target as HTMLSelectElement;

        onChange({
            name,
            value,
        });
    };

    return (
        <label htmlFor={name}>
            {name.toLowerCase()}

            <select
                id={name}
                name={name}
                onChange={handleFilterChange}
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
};
