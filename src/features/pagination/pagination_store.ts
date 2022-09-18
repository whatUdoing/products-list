import { Store } from '../../utils/state_manager/store';
import { Pagination } from '../../models/pagination/pagination';

export const INITIAL_STORE = {
    page: 1,
    total: 0,
    currentLoaded: 0,
};

export const createPaginationStore = (initialStore = INITIAL_STORE) => {
    return new Store<Pagination>(initialStore);
};

export type PaginationStore = ReturnType<typeof createPaginationStore>;