import React from 'react';
import { usePaginationApi } from './hooks/use_pagination_api';

export const LoadMore = () => {
    const { paginationService } = usePaginationApi();

    const handleLoadMore = () => {
        paginationService.nextPage();
    };

    return <button onClick={handleLoadMore}>Load more</button>;
};
